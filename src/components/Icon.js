import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icon({ name, size = 24, color = '#000000' }) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}