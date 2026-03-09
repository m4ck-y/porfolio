import React from 'react';
import styles from './FuiForms.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

export const FuiSelect: React.FC<SelectProps> = ({ 
  label, 
  options, 
  onChange,
  className,
  ...props 
}) => {
  return (
    <div className={styles.group}>
      {label && <label className={styles.label}>{label}</label>}
      <select 
        className={`${styles.select} ${className || ''}`}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const FuiCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked = false,
  onChange,
  className 
}) => {
  return (
    <label className={`${styles.checkbox} ${className || ''}`}>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={styles.checkmark} />
      {label && <span>{label}</span>}
    </label>
  );
};

interface CheckboxGroupProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
  selected?: string[];
  onChange?: (selected: string[]) => void;
}

export const FuiCheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  label,
  options,
  selected = [],
  onChange 
}) => {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange?.([...selected, value]);
    } else {
      onChange?.(selected.filter(v => v !== value));
    }
  };

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.checkboxGroup}>
        {options.map((opt) => (
          <FuiCheckbox
            key={opt.value}
            label={opt.label}
            checked={selected.includes(opt.value)}
            onChange={(checked) => handleChange(opt.value, checked)}
          />
        ))}
      </div>
    </div>
  );
};

interface RadioProps {
  label?: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const FuiRadio: React.FC<RadioProps> = ({ 
  label, 
  name,
  value,
  checked = false,
  onChange,
  className 
}) => {
  return (
    <label className={`${styles.radio} ${className || ''}`}>
      <input 
        type="radio" 
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className={styles.radiomark} />
      {label && <span>{label}</span>}
    </label>
  );
};

interface RadioGroupProps {
  label?: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  selected?: string;
  onChange?: (value: string) => void;
}

export const FuiRadioGroup: React.FC<RadioGroupProps> = ({ 
  label,
  name,
  options,
  selected,
  onChange 
}) => {
  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.radioGroup}>
        {options.map((opt) => (
          <FuiRadio
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            checked={selected === opt.value}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

interface FileUploadProps {
  label?: string;
  onChange?: (file: File | null) => void;
  className?: string;
}

export const FuiFileUpload: React.FC<FileUploadProps> = ({ 
  label,
  onChange,
  className 
}) => {
  const [fileName, setFileName] = React.useState<string>('No file selected');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || 'No file selected');
    onChange?.(file);
  };

  return (
    <div className={`${styles.file} ${className || ''}`}>
      {label && <label className={styles.label}>{label}</label>}
      <label className={styles.fileLabel}>
        <span>[ + SELECT FILE ]</span>
        <input type="file" onChange={handleChange} />
      </label>
      <div className={styles.fileInfo}>{fileName}</div>
    </div>
  );
};
