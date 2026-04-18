import styles from './SectionLabel.module.css';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionLabelProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  variant?: 'light' | 'dark' | 'accent';
  className?: string;
  hasLine?: boolean;
}

export default function SectionLabel({ 
  children, 
  align = 'left', 
  variant = 'accent', 
  hasLine = false,
  className 
}: SectionLabelProps) {
  return (
    <div className={clsx(styles.container, styles[align], className)}>
      {hasLine && <div className={clsx(styles.line, styles[`line-${variant}`])} />}
      <span className={clsx(styles.label, styles[variant])}>
        {children}
      </span>
    </div>
  );
}
