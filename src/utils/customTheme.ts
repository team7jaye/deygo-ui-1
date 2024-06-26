import { mode } from "@chakra-ui/theme-tools";
import { Colors, extendTheme, StyleProps, ThemeConfig } from "@chakra-ui/react";

export const colors: Colors = {
  primary: {
    50: "#ACACAC",
    100: "#010101",
    200: "#FB3D3D",

    300: "#E0E0E0", // Light Gray
    400: "#4D4D4D", // Medium Gray
    500: "#D32F2F", // Red (stronger shade for visibility)
  },

  secondary: {
    50: "#000080",
    10: "#003366", // Darker Navy Blue for better visibility
  },

  light: {
    50: "#FFFFFF", // White
    100: "#F5F5F5", // Very Light Gray
    200: "#E0E0E0", // Light Gray
  },
  
  dark: {
    50: "#333333", // Dark Gray
    100: "#000000", // Black
    200: "#1A1A1A", // Very Dark Gray
  },
  
  success: {
    50: "#E8F5E9", // Light Green
    100: "#66BB6A", // Medium Green
    200: "#388E3C", // Dark Green
  },
  
  error: {
    50: "#FFEBEE", // Light Red
    100: "#E57373", // Medium Red
    200: "#D32F2F", // Dark Red
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleProps) => ({
    body: {
      bg: mode("white", "dark.900")(props),
      color: "dark.500",
      fontVariant: "normal",
    },
  }),
};

const customTheme = extendTheme({
  colors,
  config,
  styles,
});

export default customTheme;
