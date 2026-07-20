/**
 * Surface card — 24px radius, #1c1c1e, no border/shadow.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** use the lighter nested surface (#2c2c2e) */
  inset?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}
