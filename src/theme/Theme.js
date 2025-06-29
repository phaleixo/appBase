import { MD3DarkTheme, MD3LightTheme, configureFonts } from 'react-native-paper';
import { Platform } from 'react-native';

// Font configuration for Material Design 3
const fontConfig = {
  android: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    },
    labelLarge: {
      fontFamily: 'Roboto-Medium',
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
    },
  },
  ios: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
    labelLarge: {
      fontFamily: 'System',
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
    },
  },
};

// ========================================
// CUSTOMIZE YOUR COLORS HERE
// ========================================

// Light theme colors
export const lightColors = {
  // Primary colors
  primary: "rgb(0, 107, 94)",
  onPrimary: "rgb(255, 255, 255)",
  primaryContainer: "rgb(118, 248, 226)",
  onPrimaryContainer: "rgb(0, 32, 27)",
  
  // Secondary colors
  secondary: "rgb(74, 99, 94)",
  onSecondary: "rgb(255, 255, 255)",
  secondaryContainer: "rgb(205, 232, 225)",
  onSecondaryContainer: "rgb(6, 32, 27)",
  
  // Tertiary colors
  tertiary: "rgb(68, 97, 121)",
  onTertiary: "rgb(255, 255, 255)",
  tertiaryContainer: "rgb(202, 230, 255)",
  onTertiaryContainer: "rgb(0, 30, 48)",
  
  // Error colors
  error: "rgb(186, 26, 26)",
  onError: "rgb(255, 255, 255)",
  errorContainer: "rgb(255, 218, 214)",
  onErrorContainer: "rgb(65, 0, 2)",
  
  // Background and surface colors
  background: "rgb(250, 253, 251)",
  onBackground: "rgb(25, 28, 27)",
  surface: "rgb(250, 253, 251)",
  onSurface: "rgb(25, 28, 27)",
  surfaceVariant: "rgb(218, 229, 225)",
  onSurfaceVariant: "rgb(63, 73, 70)",
  
  // Outline colors
  outline: "rgb(111, 121, 118)",
  outlineVariant: "rgb(190, 201, 197)",
  
  // Additional colors
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(45, 49, 48)",
  inverseOnSurface: "rgb(239, 241, 239)",
  inversePrimary: "rgb(85, 219, 198)",
  elevation: {
    level0: "transparent",
    level1: "rgb(238, 246, 243)",
    level2: "rgb(230, 241, 238)",
    level3: "rgb(223, 237, 234)",
    level4: "rgb(220, 236, 232)",
    level5: "rgb(215, 233, 229)",
  },
  surfaceDisabled: "rgba(25, 28, 27, 0.12)",
  onSurfaceDisabled: "rgba(25, 28, 27, 0.38)",
  backdrop: "rgba(41, 50, 48, 0.4)",
};

// Dark theme colors
export const darkColors = {
  // Primary colors
  primary: "rgb(85, 219, 198)",
  onPrimary: "rgb(0, 55, 48)",
  primaryContainer: "rgb(0, 79, 70)",
  onPrimaryContainer: "rgb(118, 248, 226)",
  
  // Secondary colors
  secondary: "rgb(177, 204, 197)",
  onSecondary: "rgb(26, 53, 47)",
  secondaryContainer: "rgb(48, 75, 69)",
  onSecondaryContainer: "rgb(205, 232, 225)",
  
  // Tertiary colors
  tertiary: "rgb(175, 203, 227)",
  onTertiary: "rgb(0, 51, 73)",
  tertiaryContainer: "rgb(0, 73, 103)",
  onTertiaryContainer: "rgb(202, 230, 255)",
  
  // Error colors
  error: "rgb(255, 180, 171)",
  onError: "rgb(105, 0, 5)",
  errorContainer: "rgb(147, 0, 10)",
  onErrorContainer: "rgb(255, 218, 214)",
  
  // Background and surface colors
  background: "rgb(25, 28, 27)",
  onBackground: "rgb(224, 227, 225)",
  surface: "rgb(25, 28, 27)",
  onSurface: "rgb(224, 227, 225)",
  surfaceVariant: "rgb(63, 73, 70)",
  onSurfaceVariant: "rgb(190, 201, 197)",
  
  // Outline colors
  outline: "rgb(134, 144, 140)",
  outlineVariant: "rgb(63, 73, 70)",
  
  // Additional colors
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(224, 227, 225)",
  inverseOnSurface: "rgb(45, 49, 48)",
  inversePrimary: "rgb(0, 107, 94)",
  elevation: {
    level0: "transparent",
    level1: "rgb(35, 38, 37)",
    level2: "rgb(40, 43, 42)",
    level3: "rgb(45, 48, 47)",
    level4: "rgb(47, 50, 49)",
    level5: "rgb(50, 53, 52)",
  },
  surfaceDisabled: "rgba(224, 227, 225, 0.12)",
  onSurfaceDisabled: "rgba(224, 227, 225, 0.38)",
  backdrop: "rgba(41, 50, 48, 0.4)",
};

// ========================================
// THEME CONFIGURATION
// ========================================

// Base themes with proper font configuration
const baseLightTheme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig[Platform.OS === 'ios' ? 'ios' : 'android'], isV3: true }),
};

const baseDarkTheme = {
  ...MD3DarkTheme,
  fonts: configureFonts({ config: fontConfig[Platform.OS === 'ios' ? 'ios' : 'android'], isV3: true }),
};

// Combined themes with custom colors
export const lightTheme = {
  ...baseLightTheme,
  colors: {
    ...baseLightTheme.colors,
    ...lightColors,
  },
  roundness: 12,
};

export const darkTheme = {
  ...baseDarkTheme,
  colors: {
    ...baseDarkTheme.colors,
    ...darkColors,
  },
  roundness: 12,
};

// Helper function to get theme based on color scheme
export const getTheme = (isDark = false) => {
  return isDark ? darkTheme : lightTheme;
}; 