export interface IInputProps {
  name: string;
  placeholder: string;
  label?: string;
  error?: string | undefined | false;
  value: string | undefined | number;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

export interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "reset" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
}
export interface TIconButton extends IButtonProps {
  icon: React.ReactNode;
}

export interface Option {
  value: string | number;
  label: string | number;
}

export interface SelectInputProps {
  options: Option[];
  name?: string;
  value?: string | undefined | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  css?: string;
  disabled?: boolean;
  defaultValue?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  error?: string | undefined | false;
}

export interface ICustomFileTypeProps {
  label: string;
  mainText: string;
  subText: string;
  mimeType: "avi" | "mp4" | "mov";
}

export interface ICheckboxProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  value?: boolean | string | undefined;
}

export interface ITextareaProps {
  name: string;
  label?: string;
  error?: string | undefined | false;
  value: string | undefined | number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  disabled?: boolean;
}
