/**
 * Messenger chat bubble — accent blue for own, dark gray for others, optional author line and avatar.
 */
export interface ChatBubbleProps {
  /** own message (blue, right-aligned) */
  mine?: boolean;
  /** author name shown above other people's messages */
  author?: string;
  authorColor?: string;
  children?: React.ReactNode;
  /** e.g. "13:27" */
  time?: string;
  /** show ✓✓ on own messages */
  read?: boolean;
  /** initials for the round avatar next to others' messages */
  avatar?: string;
}
