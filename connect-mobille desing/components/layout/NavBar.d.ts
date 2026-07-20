/**
 * Top navigation bar — large-title mode for root tabs, compact centered mode for pushed screens.
 */
export interface NavBarProps {
  title: string;
  /** 34px large-title layout (root of a tab) */
  large?: boolean;
  /** show back chevron */
  onBack?: () => void;
  /** show blue bell button */
  onBell?: () => void;
  /** red unread dot on the bell */
  bellDot?: boolean;
  /** small gray line under compact title (e.g. chat working hours) */
  subtitle?: string;
  /** custom right-side node when no bell */
  right?: React.ReactNode;
}
