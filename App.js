import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme, Appearance } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PaperBottomTabNavigator from './src/navigation/BottomTabNavigator';
import { lightTheme, darkTheme } from './src/theme/Theme';

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    const updateTheme = async () => {
      try {
        const newTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
        setTheme(newTheme);
        await SystemUI.setBackgroundColorAsync(newTheme.colors.background);
      } catch (error) {
        console.error('Error updating theme:', error);
      }
    };

    updateTheme();

    const subscription = Appearance.addChangeListener(updateTheme);
    return () => subscription.remove();
  }, [colorScheme]);

  return (
    <PaperProvider 
      theme={theme}
      settings={{
        icon: (props) => <MaterialCommunityIcons {...props} />,
      }}
    >
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <PaperBottomTabNavigator />
    </PaperProvider>
  );
}