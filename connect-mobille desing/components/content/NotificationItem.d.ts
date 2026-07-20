/**
 * Notification card — round icon tile, "category • date • time" meta, bold title, gray body.
 */
export interface NotificationItemProps {
  category: string;
  date: string;
  time: string;
  title?: string;
  text?: string;
  /** lucide icon name, default "newspaper" */
  icon?: string;
  iconColor?: string;
}
