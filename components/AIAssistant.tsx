import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { motion } from 'framer-motion';
import { AI_SYSTEM_PROMPT, PORTFOLIO_CONTEXT } from '../constants';
import type { ChatMessage } from '../types';

// Gemini Service Logic (integrated for simplicity)
const initChat = (context: string): Chat | null => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction: AI_SYSTEM_PROMPT },
        history: [
            {
                role: 'user',
                parts: [{ text: `Here is the context about the portfolio you are representing:\n\n${context}` }],
            },
            {
                role: 'model',
                parts: [{ text: "Understood. I am YashAI. I'm ready to answer questions based on this context and greet the user." }],
            }
        ]
    });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    return null;
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
} as const;


const AIAssistant = (): React.ReactNode => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initialize = useCallback(() => {
    setIsLoading(true);
    setError(null);
    const chatSession = initChat(PORTFOLIO_CONTEXT);
    if (!chatSession) {
      setError("Failed to initialize the AI Assistant. API key might be missing or invalid.");
      setIsLoading(false);
      return;
    }

    setChat(chatSession);

    // Hard-coded initial greeting from AI. No API call needed.
    setMessages([{
        id: Date.now().toString(),
        text: "Hello! I'm YashAI, Yashwanth's AI assistant. Feel free to ask me anything about his skills, projects, or experience.",
        sender: 'ai'
    }]);
    
    setIsLoading(false);
    
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: userInput,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await chat.sendMessageStream({ message: userInput });
      
      let fullResponse = "";
      const aiMessageId = (Date.now() + 1).toString(); // unique id

      setMessages(prev => [...prev, { id: aiMessageId, text: '', sender: 'ai' }]);

      for await (const chunk of stream) {
        fullResponse += chunk.text;
        setMessages(prev => prev.map(m => m.id === aiMessageId ? { ...m, text: fullResponse } : m));
      }

    } catch (e) {
      console.error("Error sending message:", e);
      setError("Sorry, I encountered an issue. Please try again.");
      const aiErrorId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {id: aiErrorId, text: "Sorry, I encountered an issue. Please try again.", sender: 'ai'}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Ask My <span className="text-gradient">AI Assistant</span></h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-4">
            Have questions? Chat with "YashAI", powered by Gemini. It's trained on my portfolio to answer your questions.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-lg rounded-lg shadow-2xl shadow-purple-900/20 border border-slate-700 flex flex-col h-[600px]">
        <div ref={chatContainerRef} className="flex-1 p-6 space-y-6 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-end gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M12 5.5c-3.89 0-7 3.11-7 7s3.11 7 7 7 7-3.11 7-7-3.11-7-7zM12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z" /></svg>
                </div>
              )}
              <div
                className={`max-w-md lg:max-w-lg p-3 rounded-lg shadow-md ${
                  message.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-300 rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text || '...'}</p>
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length-1]?.sender === 'user' && (
            <div className="flex items-end gap-3 justify-start">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M12 5.5c-3.89 0-7 3.11-7 7s3.11 7 7 7 7-3.11 7-7-3.11-7-7zM12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z" /></svg>
               </div>
               <div className="max-w-lg p-3 rounded-lg bg-slate-800 text-slate-300 rounded-bl-none">
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
               </div>
            </div>
          )}
        </div>
        {error && <div className="p-4 text-center text-red-400 text-sm border-t border-slate-700">{error}</div>}
        <div className="p-4 border-t border-slate-700">
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask a question about Yash..."
              disabled={isLoading || !chat}
              className="flex-1 bg-slate-900 border border-slate-600 rounded-full px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim() || !chat}
              className="bg-indigo-600 text-white rounded-full p-2.5 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default AIAssistant;