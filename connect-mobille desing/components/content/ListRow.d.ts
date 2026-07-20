/**
 * Tappable list row — IconTile + title/subtitle + trailing chevron. The building block of service lists.
 */
export interface ListRowProps {
  /** lucide icon name for the leading tile */
  icon?: string;
  iconBg?: string;
  iconColor?: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  /** custom trailing node before the chevron (Switch, value text) */
  right?: React.ReactNode;
  chevron?: boolean;
}
