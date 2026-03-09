import React from 'react';
import styles from './FuiCryptoTicker.module.css';

interface CryptoItem {
  symbol: string;
  price: string;
  change: number;
}

interface FuiCryptoTickerProps {
  type?: 'crypto' | 'stock';
}

export const FuiCryptoTicker: React.FC<FuiCryptoTickerProps> = ({ type = 'crypto' }) => {
  const items: CryptoItem[] = type === 'crypto' 
    ? [
        { symbol: 'BTC', price: '67,432.50', change: 2.34 },
        { symbol: 'ETH', price: '3,521.80', change: -1.12 },
        { symbol: 'SOL', price: '142.65', change: 5.67 },
        { symbol: 'ADA', price: '0.58', change: 0.45 },
        { symbol: 'DOT', price: '7.23', change: -2.10 },
      ]
    : [
        { symbol: 'AAPL', price: '189.45', change: 0.89 },
        { symbol: 'GOOGL', price: '141.23', change: -0.45 },
        { symbol: 'MSFT', price: '378.91', change: 1.23 },
        { symbol: 'AMZN', price: '178.32', change: 2.10 },
        { symbol: 'NVDA', price: '721.56', change: 3.45 },
      ];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerInner}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className={styles.tickerItem}>
            <span className={styles.symbol}>{item.symbol}</span>
            <span className={styles.price}>{item.price}</span>
            <span className={`${styles.change} ${item.change >= 0 ? styles.up : styles.down}`}>
              {item.change >= 0 ? '\u25B2' : '\u25BC'} {Math.abs(item.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
