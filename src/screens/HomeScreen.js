import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, useTheme, Card, Chip } from 'react-native-paper';

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.onBackground }]}>Tela Inicial</Text>
      
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
            Cores Dinâmicas
          </Text>
          <Text style={[styles.cardText, { color: theme.colors.onSurfaceVariant }]}>
            Este app usa cores dinâmicas do Material You (Android 12+)
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.chipContainer}>
        <Chip 
          icon="palette" 
          style={[styles.chip, { backgroundColor: theme.colors.primaryContainer }]}
          textStyle={{ color: theme.colors.onPrimaryContainer }}
        >
          Primária
        </Chip>
        <Chip 
          icon="palette-outline" 
          style={[styles.chip, { backgroundColor: theme.colors.secondaryContainer }]}
          textStyle={{ color: theme.colors.onSecondaryContainer }}
        >
          Secundária
        </Chip>
        <Chip 
          icon="palette-swatch" 
          style={[styles.chip, { backgroundColor: theme.colors.tertiaryContainer }]}
          textStyle={{ color: theme.colors.onTertiaryContainer }}
        >
          Terciária
        </Chip>
      </View>

      <Button 
        icon="home" 
        mode="contained" 
        onPress={() => console.log('Pressed')}
        style={styles.button}
      >
        Botão do Paper
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
    justifyContent: 'center',
  },
  chip: {
    marginBottom: 8,
  },
  button: {
    marginTop: 10,
  },
}); 