import React from 'react';
import styles from './FuiTable.module.css';

interface TableColumn {
  key: string;
  header: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  rowNum?: boolean;
  className?: string;
}

export const FuiTable: React.FC<TableProps> = ({ 
  columns, 
  data, 
  rowNum = true,
  className 
}) => {
  return (
    <table className={`${styles.table} ${className || ''}`}>
      <thead>
        <tr>
          {rowNum && <th>#</th>}
          {columns.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {rowNum && <td className={styles.rowNum}>{String(index + 1).padStart(3, '0')}</td>}
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface InfoRowProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export const FuiInfoRow: React.FC<InfoRowProps> = ({ label, value, className }) => {
  return (
    <div className={`${styles.infoRow} ${className || ''}`}>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
};
