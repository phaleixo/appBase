# appBase

Aplicativo base em React Native utilizando [Expo](https://expo.dev/) e [react-native-paper](https://callstack.github.io/react-native-paper/) com Material Design 3, incluindo suporte a temas claro/escuro.

## Funcionalidades
- Temas claro e escuro
- Navegação por abas inferiores (Bottom Tab Navigator)
- Configuração de fontes para Android e iOS
- Componentes customizados para AppBar e Ícones
- Integração completa com Expo para desenvolvimento e build simplificados

## Estrutura do Projeto
```
App.js                # Arquivo principal do app
app.json              # Configurações do Expo
index.ts              # Ponto de entrada
package.json          # Dependências e scripts
assets/               # Imagens e ícones
components/           # Componentes reutilizáveis
src/
  navigation/         # Navegação do app
  screens/            # Telas principais
  theme/              # Temas customizados
    Theme.js          # Configuração de cores e temas
  utils/              # Utilitários
```

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/appBase.git
   cd appBase
   ```
   Se não tiver o expo instalado globalmente 
   ```bash
    npm install -g expo-cli
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```
3. Rode o projeto com Expo:
   ```bash
   npx expo start
   ```

## Dependências principais
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [react-native-paper](https://callstack.github.io/react-native-paper/) (Material Design 3)
- [react-navigation](https://reactnavigation.org/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Personalização
- Edite as cores em `src/theme/Theme.js` seguindo o padrão Material Design 3
- Adicione novas telas em `src/screens/` e registre na navegação

## Gerando APK ao invés de AAB
Por padrão, o EAS Build gera um arquivo `.aab` (Android App Bundle). Para gerar um `.apk` diretamente, adicione a seguinte configuração no seu `eas.json`:

```json
{
  // ...
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

Com isso, ao rodar:
```bash
npx eas build -p android --profile production
```
o arquivo gerado será um APK pronto para instalação direta em dispositivos Android.

## Licença
Este projeto está sob a licença MIT.
