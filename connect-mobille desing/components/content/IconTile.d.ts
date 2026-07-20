/**
 * Rounded-square app-icon tile with a Lucide glyph — the leading visual of rows, tiles and notifications.
 */
export interface IconTileProps {
  /** lucide icon name */
  icon: string;
  /** glyph color */
  color?: string;
  /** tile fill */
  bg?: string;
  /** px square, default 44 */
  size?: number;
  radius?: number;
  iconSize?: number;
}
