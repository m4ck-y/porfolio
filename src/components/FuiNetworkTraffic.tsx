import React from 'react';
import styles from './FuiNetworkTraffic.module.css';

export const FuiNetworkTraffic: React.FC = () => {
  return (
    <div className={styles.ticker}>
      <div className={`${styles.tickerInner} ${styles.fast}`}>
        <span className={styles.inLabel}>[IN]</span>
        <span className={styles.ip}>192.168.1.105</span>
        <span className={styles.speed}>12.4 KB/s</span>
        <span className={styles.outLabel}>[OUT]</span>
        <span className={styles.ip}>192.168.1.105</span>
        <span className={styles.speed}>8.2 KB/s</span>
        <span className={styles.inLabel}>[IN]</span>
        <span className={styles.ip}>192.168.1.142</span>
        <span className={styles.speed}>45.6 KB/s</span>
      </div>
    </div>
  );
};
