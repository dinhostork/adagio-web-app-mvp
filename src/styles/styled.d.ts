import 'styled-components'

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      main: string;
      primary: string;
      background: string;
      text: string;
      enffort: string;
      secundary: string;
      mobBgColor?: string;
    };
  }
}
