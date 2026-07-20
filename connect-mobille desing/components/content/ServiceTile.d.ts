/**
 * Square-ish tile for the horizontal "Полезные сервисы" carousel — icon top, label bottom.
 */
export interface ServiceTileProps {
  icon: string;
  iconBg?: string;
  iconColor?: string;
  label: string;
  onClick?: () => void;
}
