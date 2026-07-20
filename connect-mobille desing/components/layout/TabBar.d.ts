/**
 * Bottom tab bar — blurred dark bar, blue active tab, red count badges.
 * Position: absolute — parent must be position:relative (the phone frame).
 */
export interface TabBarItem {
  key: string;
  label: string;
  /** lucide icon name */
  icon: string;
  /** unread count badge */
  badge?: number | string;
}
export interface TabBarProps {
  items: TabBarItem[];
  active: string;
  onChange?: (key: string) => void;
}
