export interface AuthProps {
  user?: string;
  login: () => void;
  logout: () => void;
}

export interface ToggleThemeProps {
  toggleTheme: () => void;
}

export interface HeaderProps {
  user: string;
  theme: string;
}

interface MyContextValue extends HeaderProps {}

export type MyContextType =
  | [MyContextValue, React.Dispatch<React.SetStateAction<MyContextValue>>]
  | undefined;
