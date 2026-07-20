/**
 * Metric card — icon, big value, gray label. Home-screen daily counters.
 */
export interface StatCardProps {
  value: string | number;
  label: string;
  /** lucide icon name */
  icon?: string;
  tone?: 'neutral' | 'blue' | 'green' | 'red' | 'amber';
  style?: React.CSSProperties;
}
