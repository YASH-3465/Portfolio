import type { Project, Skill, Certificate } from './types';

/*
================================================================================
=== HOW TO CUSTOMIZE YOUR PORTFOLIO CONTENT =====================================
================================================================================

This file is the central place to manage the content of your portfolio.
You can update your projects, certificates, and personal information here.

--- ADDING/UPDATING PROJECTS ---
- Go to the `PROJECTS` array below.
- Each project is an object with the following properties:
  - `title`: The name of your project.
  - `description`: A short summary of what it does.
  - `tags`: A list of technologies or skills used (e.g., ['React', 'Node.js']).
  - `imageUrl`: The URL of an image for your project.
    - HOW TO GET AN IMAGE URL:
      1. Take a screenshot of your project.
      2. Upload it to an image hosting service like https://imgur.com/upload
      3. After uploading, right-click the image and select "Copy Image Address".
      4. Paste that URL into the `imageUrl` field.
  - `liveUrl`: (Optional) The URL to the live demo of your project. Use '#' if you don't have one.
  - `githubUrl`: (Optional) The URL to the project's GitHub repository. Use '#' if you don't have one.

--- ADDING/UPDATING CERTIFICATES ---
- Go to the `CERTIFICATES` array below.
- Each certificate is an object with:
  - `title`: The name of the certification.
  - `issuer`: Who issued the certificate (e.g., 'Coursera', 'Google').
  - `date`: When it was issued.
  - `imageUrl`: The URL of an image of your certificate. (Follow the same steps as for project images).
  - `verifyUrl`: (Optional) A link to verify the certificate's authenticity. Use '#' if you don't have one.

*/

export const SKILLS: Omit<Skill, 'icon'>[] = [
    { name: 'C' },
    { name: 'Python' },
    { name: 'C++' },
    { name: 'JavaScript' },
    { name: 'HTML & CSS' },
    { name: 'Machine Learning' },
    { name: 'Deep Learning' },
    { name: 'DSA' },
    { name: 'Transformers' },
    { name: 'smtplib'}
];

export const PROJECTS: Project[] = [
  {
    title: 'Goods Connect-Retailer & Wholesaler ',
    description: "Developed a front-end web platform to streamline B2B goods exchange between retailers and wholesalers.Designed a user-friendly interface for browsing and purchasing bulk products, improving supply chain efficiency and transaction transparency. Focused on accessibility, product categorization, and enhancing supplier-buyer relationships using HTML, CSS, and JavaScript.",
    tags: ['HTML','Cascading Style Sheet','Java Script','UI/UX Design'],
    imageUrl: '/Goods-connect.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'LIFELINE_AI',
    description: 'streamlit-based voice-driven emotional support system. It uses natural language processing to recognize your emotions through voice and responds accordingly — by showing comforting memories, speaking kind words, or alerting a trusted contact in case of emotional distress.',
    tags: ['smtplib','Transformers','BERT [language model]','PIL'],
    imageUrl: '/LIFELINE_AI.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com/YASH-3465/LIFELINE-AI',
  },
  {
    title: 'LUNA-Voice Assistant',
    description: 'Built an intelligent desktop-based voice assistant to automate daily tasks through natural voice interaction.Integrated features like web search, YouTube playback, reminders, camera access, volume control, app launching, MS Paint drawing, and WhatsApp Web messaging. Designed a futuristic GUI for improved usability using Python, SpeechRecognition, pyttsx3, OpenCV, and other libraries. Currently transitioning the assistant to a web-based platform..',
    tags: ['Python','GUI','Open CV','pywhatkit','Speech-Recognition'],
    imageUrl: '/LUNA@.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com/YASH-3465/LUNA',
  },
   {
    title: 'SMS-Spam Classifier',
    description: 'Developed a machine learning-powered web tool to detect and filter spam messages with high accuracy.Achieved 97% accuracy and 100% precision using a labeled SMS dataset. Integrated the model into a clean, real-time Streamlit interface for seamless user interaction. Built with Python, scikit-learn, Pandas, and joblib to promote safer digital communication.',
    tags: ['Machine Learning','Streamlit(Web UI)','Scikit-Learn','Text-Classification'],
    imageUrl: '/sms.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com/YASH-3465/sms-spam-classifier',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'AI Programming with Python',
    issuer: 'Udacity',
    date: 'Issued Jan 2024',
    imageUrl: 'https://i.imgur.com/cWk2C6s.png',
    verifyUrl: '#',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    date: 'Issued Nov 2023',
    imageUrl: 'https://i.imgur.com/vHqJcE9.png',
    verifyUrl: '#',
  },
  {
    title: 'Machine Learning Engineer',
    issuer: 'DataCamp',
    date: 'Issued Sep 2023',
    imageUrl: 'https://i.imgur.com/sTzJ0fT.png',
    verifyUrl: '#',
  },
];


export const PORTFOLIO_CONTEXT = `
Name: Yashwanth Goud
Title: AI-ML Developer & Tech Enthusiast

About:
A first-year CSE student at CVR Engineering College, passionate about coding, building real-world solutions, and constantly learning. Proficient in C, Python, and C++, with hands-on experience in creating personal assistants, automation tools, and responsive websites using HTML and CSS. Currently diving into DSA and exploring JavaScript to bring more interactivity to my projects. I stay curious, love collaborating, and am always eager to explore the latest tech trends and push my skills to the next level.

Skills:
- Languages: C, Python, C++, JavaScript, TypeScript, HTML, CSS
- Key Areas: Machine Learning, Deep Learning, Data Structures & Algorithms (DSA)
- Tools & APIs: Git, Figma, Gemini API

Projects:
1.B2B Goods Exchange Platform :
Developed a front-end web platform to connect retailers and wholesalers, enabling smooth bulk browsing and purchasing with a user-friendly interface. Improved supply chain transparency and B2B decision-making using HTML, CSS, and JavaScript.

2. Voice-Controlled Desktop AI Assistant :
Built a desktop-based AI assistant using Python that executes voice commands for tasks like web search, YouTube playback, reminders, app launching, and WhatsApp messaging. Designed with a futuristic GUI and transitioning to a web-based version.

3. Spam Message Classifier :
Created a machine learning tool to detect and filter spam SMS messages with 97% accuracy and 100% precision. Integrated into a responsive Streamlit web interface using Python, scikit-learn, and Pandas for real-time predictions.

4. LIFELINE_AI:
streamlit-based voice-driven emotional support system. It uses natural language processing to recognize your emotions through voice and responds accordingly — by showing comforting memories, speaking kind words, or alerting a trusted contact in case of emotional distress.

- AI Programming with Python from HackerRank
- Deep Learning Specialization from GeeksforGeeks
- Machine Learning Engineer from GeekdforGeeks
`;

export const AI_SYSTEM_PROMPT = `You are Yashwanth Goud's friendly and professional AI Assistant. Your name is "YashAI". Your purpose is to answer questions from potential employers, recruiters, and collaborators based on the portfolio information provided.

Your instructions are:
1.  **Be Professional and Enthusiastic:** Answer questions clearly and with a positive tone that reflects Yashwanth's passion.
2.  **Stick to the Provided Context:** Only use the information from the portfolio context. Do not invent details about Yashwanth's experience, skills, or personal life.
3.  **Handle Unknown Questions:** If asked a question you cannot answer from the context (e.g., "What is Yashwanth's phone number?" or "What are his salary expectations?"), politely decline and suggest they contact him directly through his social links. For example, say: "I don't have access to that information, but you can reach out to Yashwanth on LinkedIn for more details."
4.  **Introduce Yourself:** In your first message, briefly introduce yourself as "YashAI, Yashwanth's AI Assistant" and invite the user to ask questions about his work.
5.  **Keep it Conversational:** Use a friendly but professional tone.
`;