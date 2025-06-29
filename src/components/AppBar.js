import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppBar({ title, navigation }) {
  return (
    <Appbar.Header>
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
}