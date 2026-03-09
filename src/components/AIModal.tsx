import React, { useState, useRef, useEffect } from 'react';

import { FuiGlitch } from '@/components/FuiGlitch';
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
  'What are your skills?',
  'Tell me about your experience',
  'Show me your projects',
  'How to contact you?',
];

const aiResponses: Record<string, string> = {
  'who': "I am Syngular IA, an AI assistant integrated into Macario's portfolio. I'm here to answer questions about him, his skills, experience, and projects.",
  'skill': "Macario's technical skills include:\n\n> JavaScript/TypeScript, React, Python\n> Backend: FastAPI, SQLAlchemy, PostgreSQL\n> Frontend: React, TailwindCSS, NextUI\n> Cloud: Google Cloud, Microsoft Azure\n> DevOps: Docker, Linux\n> Data: Pandas, Selenium, Jupyter",
  'experience': "Macario has 5+ years of experience:\n\n[1] Software Architect at Liber Salus (Present)\n[2] Full Stack Developer at Liber Salus\n[3] Backend/Frontend at Elevenminds Labs\n\nHe specializes in microservices architecture, React, Python, and cloud deployment.",
  'project': "Notable projects:\n\n[ * ] Hospital Management System (Laravel -> React)\n[ * ] Data Analysis for CDMX wells\n[ * ] Browser Automation for data extraction\n[ * ] KidiAdmin WebApp (TypeScript + d3.js)",
  'contact': "You can initiate contact protocols via:\n\n> Email: macario.alvaradohdez@gmail.com\n> Phone: +52 7712397470\n> GitHub: github.com/m4ck-y\n> LinkedIn: linkedin.com/in/macario-alvarado-hernández-125b4b269",
};

export const AIModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, type: 'ai', label: 'SYS_BOOT', text: 'Initializing Syngular IA protocol...', time: '00:00:01' },
    { id: 1, type: 'ai', label: 'Syngular', text: 'Greetings, User. System operational. How may I assist you?', time: '00:00:02' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerQuery.includes(key)) {
        return response;
      }
    }
    return "COMMAND NOT RECOGNIZED. Try asking about: skills, experience, projects, or contact info.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      label: 'GUEST',
      text: input,
      time: getTime(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(userMessage.text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        label: 'Syngular',
        text: aiResponse,
        time: getTime(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay 1-2s for realism
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      const btn = document.getElementById('ai-send-btn');
      if (btn) btn.click();
    }, 50);
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
        <div className={`${styles.container} ${isOpen ? styles.containerActive : ''}`} onClick={e => e.stopPropagation()}>
          <div className={styles.scanline} />
          <div className={`${styles.corner} ${styles.cornerTl}`} />
          <div className={`${styles.corner} ${styles.cornerTr}`} />
          <div className={`${styles.corner} ${styles.cornerBl}`} />
          <div className={`${styles.corner} ${styles.cornerBr}`} />

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>

          <div className={styles.header}>
            <FuiGlitch text="SYNGULAR IA" tag="span" className={styles.title} />
            <div className={styles.status}>
              <span className={styles.statusText}>SYS.LINK</span>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>ACTIVE</span>
            </div>
          </div>

          <div className={styles.body}>
            {messages.map((msg, idx) => (
              <div
                key={msg.id}
                className={`${styles.message} ${msg.type === 'user' ? styles.messageUser : styles.messageAi}`}
                style={{ animationDelay: `${Math.min(0.5, (messages.length - idx) * 0.1)}s` }}
              >
                <div className={styles.messageHeader}>
                  <div className={styles.messageLabel}>
                    {msg.type === 'user' ? '>' : '::'} {msg.label}
                  </div>
                  <div className={styles.messageTime}>{msg.time}</div>
                </div>
                <div className={styles.messageText}>
                  {msg.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className={styles.typing}>
                <span className={styles.typingPrefix}>SYNGULAR IS THINKING</span>
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.quickActions}>
            <span className={styles.quickLabel}>QUICK_CMD:</span>
            {quickQuestions.map((q, i) => (
              <button key={i} className={styles.quickBtn} onClick={() => handleQuickQuestion(q)}>
                [{q}]
              </button>
            ))}
          </div>

          <div className={styles.inputArea}>
            <div className={styles.inputWrapper}>
              <span className={styles.terminalPrompt}>{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter query..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className={styles.terminalInput}
                autoComplete="off"
                spellCheck="false"
              />
              <button id="ai-send-btn" className={styles.sendBtn} onClick={handleSend}>
                EXEC
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
