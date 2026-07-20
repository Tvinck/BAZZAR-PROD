/**
 * Project switcher chip + dropdown (BAZZAR SERTS / Veil VPN) above the home title.
 */
export interface ProjectPickerProps {
  projects: string[];
  /** currently selected project */
  value: string;
  onChange?: (project: string) => void;
}
