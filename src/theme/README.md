# Personalização de Cores

Este arquivo contém a configuração de cores do seu aplicativo seguindo o padrão Material Design 3 do React Native Paper.

## Paleta de Cores Atual

O aplicativo usa uma paleta baseada em **verde-azulado (teal)** com as seguintes características:

### Tema Claro
- **Cor Primária**: Verde-azulado escuro `rgb(0, 107, 94)`
- **Cor Secundária**: Cinza-esverdeado `rgb(74, 99, 94)`
- **Cor Terciária**: Azul acinzentado `rgb(68, 97, 121)`
- **Fundo**: Branco com leve tom esverdeado `rgb(250, 253, 251)`

### Tema Escuro
- **Cor Primária**: Verde-azulado claro `rgb(85, 219, 198)`
- **Cor Secundária**: Verde-azulado claro `rgb(177, 204, 197)`
- **Cor Terciária**: Azul claro `rgb(175, 203, 227)`
- **Fundo**: Cinza muito escuro `rgb(25, 28, 27)`

## Como Personalizar as Cores

### 1. Cores Primárias (Primary Colors)
```javascript
// Tema Claro
primary: "rgb(0, 107, 94)",           // Cor principal
onPrimary: "rgb(255, 255, 255)",      // Cor do texto sobre a cor principal
primaryContainer: "rgb(118, 248, 226)", // Container da cor principal
onPrimaryContainer: "rgb(0, 32, 27)", // Cor do texto sobre o container

// Tema Escuro
primary: "rgb(85, 219, 198)",         // Cor principal
onPrimary: "rgb(0, 55, 48)",          // Cor do texto sobre a cor principal
primaryContainer: "rgb(0, 79, 70)",   // Container da cor principal
onPrimaryContainer: "rgb(118, 248, 226)", // Cor do texto sobre o container
```

### 2. Cores Secundárias (Secondary Colors)
```javascript
// Tema Claro
secondary: "rgb(74, 99, 94)",         // Cor secundária
onSecondary: "rgb(255, 255, 255)",    // Cor do texto sobre a cor secundária
secondaryContainer: "rgb(205, 232, 225)", // Container da cor secundária
onSecondaryContainer: "rgb(6, 32, 27)", // Cor do texto sobre o container

// Tema Escuro
secondary: "rgb(177, 204, 197)",      // Cor secundária
onSecondary: "rgb(26, 53, 47)",       // Cor do texto sobre a cor secundária
secondaryContainer: "rgb(48, 75, 69)", // Container da cor secundária
onSecondaryContainer: "rgb(205, 232, 225)", // Cor do texto sobre o container
```

### 3. Cores Terciárias (Tertiary Colors)
```javascript
// Tema Claro
tertiary: "rgb(68, 97, 121)",         // Cor terciária
onTertiary: "rgb(255, 255, 255)",     // Cor do texto sobre a cor terciária
tertiaryContainer: "rgb(202, 230, 255)", // Container da cor terciária
onTertiaryContainer: "rgb(0, 30, 48)", // Cor do texto sobre o container

// Tema Escuro
tertiary: "rgb(175, 203, 227)",       // Cor terciária
onTertiary: "rgb(0, 51, 73)",         // Cor do texto sobre a cor terciária
tertiaryContainer: "rgb(0, 73, 103)", // Container da cor terciária
onTertiaryContainer: "rgb(202, 230, 255)", // Cor do texto sobre o container
```

### 4. Cores de Fundo e Superfície
```javascript
// Tema Claro
background: "rgb(250, 253, 251)",     // Cor de fundo principal
onBackground: "rgb(25, 28, 27)",      // Cor do texto sobre o fundo
surface: "rgb(250, 253, 251)",        // Cor da superfície
onSurface: "rgb(25, 28, 27)",         // Cor do texto sobre a superfície
surfaceVariant: "rgb(218, 229, 225)", // Variante da superfície
onSurfaceVariant: "rgb(63, 73, 70)",  // Cor do texto sobre a variante

// Tema Escuro
background: "rgb(25, 28, 27)",        // Cor de fundo principal
onBackground: "rgb(224, 227, 225)",   // Cor do texto sobre o fundo
surface: "rgb(25, 28, 27)",           // Cor da superfície
onSurface: "rgb(224, 227, 225)",      // Cor do texto sobre a superfície
surfaceVariant: "rgb(63, 73, 70)",    // Variante da superfície
onSurfaceVariant: "rgb(190, 201, 197)", // Cor do texto sobre a variante
```

### 5. Cores de Erro
```javascript
// Tema Claro
error: "rgb(186, 26, 26)",            // Cor de erro
onError: "rgb(255, 255, 255)",        // Cor do texto sobre o erro
errorContainer: "rgb(255, 218, 214)", // Container do erro
onErrorContainer: "rgb(65, 0, 2)",    // Cor do texto sobre o container de erro

// Tema Escuro
error: "rgb(255, 180, 171)",          // Cor de erro
onError: "rgb(105, 0, 5)",            // Cor do texto sobre o erro
errorContainer: "rgb(147, 0, 10)",    // Container do erro
onErrorContainer: "rgb(255, 218, 214)", // Cor do texto sobre o container de erro
```

## Exemplo de Personalização

Para alterar a cor principal do seu app para azul:

```javascript
// Em src/theme/Theme.js, altere:

// Tema Claro
export const lightColors = {
  primary: "rgb(25, 118, 210)",       // Azul Material Design
  onPrimary: "rgb(255, 255, 255)",
  primaryContainer: "rgb(187, 222, 251)",
  onPrimaryContainer: "rgb(0, 47, 84)",
  // ... outras cores
};

// Tema Escuro
export const darkColors = {
  primary: "rgb(144, 202, 249)",      // Azul claro para tema escuro
  onPrimary: "rgb(0, 47, 84)",
  primaryContainer: "rgb(25, 118, 210)",
  onPrimaryContainer: "rgb(187, 222, 251)",
  // ... outras cores
};
```

## Formato RGB

Todas as cores estão no formato `rgb(r, g, b)` onde:
- `r` = valor vermelho (0-255)
- `g` = valor verde (0-255) 
- `b` = valor azul (0-255)

Para cores com transparência, use `rgba(r, g, b, a)` onde `a` é a opacidade (0.0-1.0).

## Ferramentas Úteis

- **Material Design Color Tool**: https://material.io/resources/color/
- **Material Design 3 Color System**: https://m3.material.io/foundations/color/overview
- **React Native Paper Theme**: https://callstack.github.io/react-native-paper/docs/guides/theming/
- **RGB Color Picker**: https://www.w3schools.com/colors/colors_picker.asp

## Dicas

1. **Contraste**: Sempre mantenha contraste adequado entre cores de fundo e texto
2. **Acessibilidade**: Use ferramentas para verificar se suas cores atendem aos padrões de acessibilidade
3. **Consistência**: Mantenha a mesma paleta de cores em ambos os temas
4. **Teste**: Sempre teste em ambos os temas (claro e escuro) antes de finalizar
5. **Material Design**: Siga as diretrizes do Material Design 3 para criar paletas harmoniosas 