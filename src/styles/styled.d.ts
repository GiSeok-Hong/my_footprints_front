import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      white: string;
    };

    fontWeight: {
      Thin: number;
      ExtraLight: number;
      Light: number;
      Normal: number;
      Medium: number;
      SemiBold: number;
      Bold: number;
      ExtraBold: number;
      UltraBold: number;
    }
  }
}