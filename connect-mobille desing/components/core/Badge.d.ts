/**
 * Status badge — dim tinted fill with matching text color.
 */
export interface BadgeProps {
  tone?: 'neutral' | 'blue' | 'green' | 'red' | 'amber' | 'violet';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
