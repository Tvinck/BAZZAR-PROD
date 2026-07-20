/**
 * Lucide icon wrapper. Requires the Lucide UMD script on the page.
 * @startingPoint section="Core" subtitle="Lucide icon wrapper" viewport="700x150"
 */
export interface IconProps {
  /** kebab-case lucide name, e.g. "bell", "message-circle" */
  name: string;
  /** px, default 22 */
  size?: number;
  /** default currentColor */
  color?: string;
  strokeWidth?: number;
  fill?: string;
  style?: React.CSSProperties;
}
