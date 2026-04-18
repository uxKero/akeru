import styles from './Chip.module.css';

interface ChipProps {
  children: React.ReactNode;
}

export default function Chip({ children }: ChipProps) {
  return <div className={styles.chip}>{children}</div>;
}
