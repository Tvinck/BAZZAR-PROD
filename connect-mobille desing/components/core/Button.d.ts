/**
 * Connect Mobile button. Yellow CTA is the primary action; tonal is the in-card secondary.
 * @startingPoint section="Core" subtitle="Yellow CTA, tonal, plain and blue variants" viewport="700x220"
 */
export interface ButtonProps {
  /** 'primary' (yellow fill) | 'tonal' (dark fill, blue text) | 'plain' (blue text) | 'blue' (accent fill) */
  variant?: 'primary' | 'tonal' | 'plain' | 'blue';
  children?: React.ReactNode;
  /** optional leading icon node */
  icon?: React.ReactNode;
  /** stretch to container width (in-card CTAs are always block) */
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
