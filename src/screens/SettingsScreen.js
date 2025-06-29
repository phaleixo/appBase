import { View, Text, StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

export default function SettingsScreen() {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.onBackground }]}>Tela Settings</Text>
      <Button 
        icon="cog" 
        mode="contained" 
        onPress={() => console.log('Pressed')}
        style={styles.button}
      >
        Botão do Paper
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  },
}); 