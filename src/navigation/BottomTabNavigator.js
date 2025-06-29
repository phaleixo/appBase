import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default function PaperBottomTabNavigator() {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();
  
  const routes = [
    { 
      key: 'home', 
      title: 'Início', 
      focusedIcon: 'home', 
      unfocusedIcon: 'home-outline',
    },
    { 
      key: 'profile', 
      title: 'Perfil', 
      focusedIcon: 'account', 
      unfocusedIcon: 'account-outline',
    },
    { 
      key: 'settings', 
      title: 'Configurações', 
      focusedIcon: 'cog', 
      unfocusedIcon: 'cog-outline',
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    profile: ProfileScreen,
    settings: SettingsScreen,
  });

  const renderIcon = ({ route, focused, color }) => {
    const iconName = focused ? route.focusedIcon : route.unfocusedIcon;
    return (
      <MaterialCommunityIcons 
        name={iconName} 
        size={24} 
        color={color}
      />
    );
  };

  return (
    <>
      <StatusBar 
        backgroundColor={theme.colors.background} 
        barStyle={theme.dark ? 'light-content' : 'dark-content'} 
      />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        barStyle={{ 
          backgroundColor: theme.colors.elevation?.level2 || theme.colors.surface,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: theme.colors.outline,
          elevation: 0,
        }}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.onSurfaceVariant}
        labeled={true}
        safeAreaInsets={{ bottom: 8 }}
        theme={{
          ...theme,
          fonts: {
            ...theme.fonts,
            labelLarge: theme.fonts.medium,
          }
        }}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
      />
    </>
  );
}