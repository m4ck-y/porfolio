import React, { useState, useRef, useEffect } from 'react';
import { FuiInput } from '@/components/FuiInput';
import styles from './AIModal.module.css';

interface Message {
  id: number;
  type: 'user' | 'ai';
  label: string;
  text: string;
  time: string;
}

const quickQuestions = [
  'Who are you?',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
];

const aiResponses: Record<string, string> = {
  'who are you': "I am JARVIS, an AI assistant integrated into Macario's portfolio. I'm here to answer questions about him, his skills, experience, and projects.",
  'skills': "Macario's technical skills include:\n\n- JavaScript/TypeScript, React, Python\n- Backend: FastAPI, SQLAlchemy, PostgreSQL\n- Frontend: React, TailwindCSS, NextUI\n- Cloud: Google Cloud, Microsoft Azure\n- DevOps: Docker, Linux\n- Data: Pandas, Selenium, Jupyter",
  'experience': "Macario has 5+ years of experience:\n\n1. Software Architect at Liber Salus (Present)\n2. Full Stack Developer at Liber Salus\n3. Backend/Frontend at Elevenminds Labs\n\nHe specializes in microservices architecture, React, Python, and cloud deployment.",
  'projects': "Notable projects:\n\n1. Hospital Management System - Migration from Laravel to React microservices\n2. Data Analysis - Water quality analysis for CDMX wells\n3. Browser Automation - Pillars of Mexico City data extraction\n4. KidiAdmin - WebApp with TypeScript and d3.js",
  'contact': "You can contact Macario at:\n\n- Email: macario.alvaradohdez@gmail.com\n- Phone: +52 7712397470\n- GitHub: github.com/m4ck-y\n- LinkedIn: linkedin.com/in/macario-alvarado-hernandez",
  'default': "I understand your query. Processing data... For more specific questions, try asking about: skills, experience, projects, or contact info.",
};

export const AIModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, type: 'ai', label: 'JARVIS', text: 'Greetings, User. I am JARVIS, your personal AI assistant. How may I help you today?', time: '00:00:01' },
    { id: 1, type: 'ai', label: 'JARVIS', text: 'System status: All subsystems operational. Neural interface: Stable.', time: '00:00:02' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerQuery.includes(key)) {
        return response;
      }
    }
    return aiResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      type: 'user',
      label: 'USER',
      text: input,
      time: getTime(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      const aiMessage: Message = {
        id: messages.length + 1,
        type: 'ai',
        label: 'JARVIS',
        text: aiResponse,
        time: getTime(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <button className={styles.fab} onClick={() => setIsOpen(true)}>
        <div className={styles.icon} />
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`} onClick={() => setIsOpen(false)}>
        <div className={styles.container} onClick={e => e.stopPropagation()}>
          <div className={`${styles.corner} ${styles.cornerTl}`} />
          <div className={`${styles.corner} ${styles.cornerTr}`} />
          <div className={`${styles.corner} ${styles.cornerBl}`} />
          <div className={`${styles.corner} ${styles.cornerBr}`} />

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>x</button>

          <div className={styles.header}>
            <div className={styles.title}>// AI ASSISTANT</div>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              <span>ONLINE</span>
            </div>
          </div>

          <div className={styles.body}>
            {messages.map(msg => (
              <div key={msg.id} className={`${styles.message} ${msg.type === 'user' ? styles.messageUser : styles.messageAi}`}>
                <div className={styles.messageLabel}>[ {msg.label} ]</div>
                <div className={styles.messageText}>{msg.text}</div>
                <div className={styles.messageTime}>{msg.time}</div>
              </div>
            ))}
            {isTyping && (
              <div className={styles.typing}>
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.quickActions}>
            {quickQuestions.map((q, i) => (
              <button key={i} className={styles.quickBtn} onClick={() => handleQuickQuestion(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className={styles.inputArea}>
            <div className={styles.inputWrapper}>
              <FuiInput
                type="text"
                placeholder="Enter command..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className={styles.chatInput}
              />
              <button className={styles.sendBtn} onClick={handleSend}>
                {'>'}
              </button>
            </div>
          </div>

          <div className={styles.waves}>
            <div className={styles.wave} />
          </div>
        </div>
      </div>
    </>
  );
};
