import React from 'react';
import type { Certificate } from '../types';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ExternalLinkIcon = () => (
  <svg xmlns="" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-slate-800/50 rounded-lg overflow-hidden group border border-slate-700/50 hover:border-purple-500/80 hover:shadow-2xl hover:shadow-purple-900/40">
      <div className="overflow-hidden aspect-video">
        <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{certificate.title}</h3>
        <p className="text-purple-400 text-sm font-semibold mb-2">{certificate.issuer}</p>
        <p className="text-slate-400 text-xs mb-4">{certificate.date}</p>
        {certificate.verifyUrl && certificate.verifyUrl !== '#' && (
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-700/50 text-slate-300 px-4 py-2 rounded-md font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm"
          >
            <ExternalLinkIcon />
            <span>Verify Credential</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;