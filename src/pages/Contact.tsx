import React, { useState } from 'react';
import { FuiInput, FuiButton } from '../components';
import styles from './Contact.module.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: '+', label: 'PHONE', value: '+52 7712397470', href: 'tel:+527712397470' },
    { icon: '@', label: 'EMAIL', value: 'macario.alvaradohdez@gmail.com', href: 'mailto:macario.alvaradohdez@gmail.com' },
    { icon: '</>', label: 'GITHUB', value: 'github.com/m4ck-y', href: 'https://github.com/m4ck-y' },
  ];

  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>CONTACT ME</h1>
      <p className={styles.subtitle}>// I AM AVAILABLE FOR NEW OPPORTUNITIES</p>

      {submitted ? (
        <div className={styles.successMessage}>
          MESSAGE SENT SUCCESSFULLY
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <FuiInput
              label="Name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FuiInput
              label="Email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <FuiInput
            label="Subject"
            name="subject"
            placeholder="Message subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <div>
            <label className={styles.label} style={{ 
              display: 'block', 
              fontFamily: 'var(--fui-font-mono)', 
              fontSize: '9px', 
              color: '#00ffff60', 
              letterSpacing: '2px', 
              marginBottom: '8px' 
            }}>
              MESSAGE
            </label>
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <FuiButton type="submit" initiate>
            SEND MESSAGE
          </FuiButton>
        </form>
      )}

      <div className={styles.contactInfo}>
        {contactInfo.map((info, index) => (
          <div key={index} className={styles.infoCard}>
            <div className={styles.infoIcon}>{info.icon}</div>
            <div className={styles.infoLabel}>{info.label}</div>
            <div className={styles.infoValue}>
              <a href={info.href} target="_blank" rel="noopener noreferrer">
                {info.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
