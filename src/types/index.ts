export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isError?: boolean;
}

export interface SurveyProps {
  isOpen: boolean;
  onClose: () => void;
}