import styles from './Button.module.css';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Variant = 'accent' | 'ghost-dark' | 'ghost-light' | 'primary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export default function Button({ variant = 'ghost-dark', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
