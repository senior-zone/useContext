export enum THEME_OPTIONS {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type ThemeContextStateType = [
  THEME_OPTIONS,
  React.Dispatch<React.SetStateAction<THEME_OPTIONS>>,
];

export type ThemeContextType = ThemeContextStateType | undefined;

interface IAuth {
  username: string;
}

export type AuthContextStateType = [IAuth, React.Dispatch<React.SetStateAction<IAuth>>];

export type AuthContextType = AuthContextStateType | undefined;
