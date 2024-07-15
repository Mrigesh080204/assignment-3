import React from 'react';
import { View, StatusBar } from 'react-native';
import RoundedButton from './button/RoundedButton';
import SquareButton from './button/SquareButton';

export default function App() {
  return (
    <View>
      <RoundedButton btnObj={{ bgColor: '#007bff', text: 'primary button', logo:'', width: 200, height: 40, textColor: '#ffffff' }} />
      <SquareButton btnObj={{ bgColor: '#cccccc', text: 'secondary button', logo:'', width: 200, height: 40, textColor: '#000000' }} />
      <RoundedButton btnObj={{ bgColor: '#34c759', text: 'success button', logo: '41', width: 200, height: 40, textColor: '#ffffff' }} />
      <SquareButton btnObj={{ bgColor: 'white', text: 'Danger Button', logo:'⚠️', width: 200, height: 50, textColor: 'red', borderColor: 'red', borderWidth: 2 }} />      
      <RoundedButton btnObj={{ bgColor: '#ffff00', text: 'warning button', width: 200, height: 40, textColor: '#000000' }} />
      <SquareButton btnObj={{ bgColor: '#007bff', text: 'info button', width: 200, height: 40, textColor: '#ffffff' }} />
      <StatusBar style="auto" />
    </View>
  );
}