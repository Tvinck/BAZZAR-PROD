/**
 * iOS-style toggle switch (51×31), accent-blue when on.
 */
export interface SwitchProps {
  /** controlled value */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
