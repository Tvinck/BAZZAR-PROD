/**
 * Green-gradient promo banner with a large right-side glyph and dismiss button.
 * @startingPoint section="Content" subtitle="Dismissable gradient announcement" viewport="700x180"
 */
export interface PromoBannerProps {
  title: string;
  subtitle?: string;
  /** lucide icon name for the big right glyph, default "shield" */
  icon?: string;
  /** show the round white × button */
  onDismiss?: () => void;
  onClick?: () => void;
  /** override the green gradient */
  gradient?: string;
}
