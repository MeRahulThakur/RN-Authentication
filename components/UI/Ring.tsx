import React from 'react';
import { View, Text, StyleSheet, ColorSchemeName, Pressable } from 'react-native';

import { Colors } from '../../constants/colors';
import { useTheme } from '../../hooks/useTheme';

interface HealthRingProps {
  value: number; // Current value
  title: string;
  active: string;
  onPress: (title: string) => void;
}

const Ring: React.FC<HealthRingProps> = ({ value, title, active, onPress }) => {
  const { colorScheme } = useTheme()
  const styles = getStyles(colorScheme)
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => onPress(title)}
      >
        <View style={[styles.ring, (active === title) && styles.active]}>
          <Text style={styles.ringValue}>{value}</Text>
        </View>
      </Pressable>
      <Text style={styles.ringTitle}>{title}</Text>
    </View>
  );
};

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    ring: {
      width: 90,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 6,
      borderRadius: 50,
      borderColor: Colors.common.grey,
    },
    active: {
      borderColor: '#4caf50',
    },
    ringValue: {
      overflow: 'hidden',
      fontSize: 24,
      color: Colors[colorScheme ?? 'light'].textColor,
    },
    ringTitle: {
      fontSize: 14,
      color: Colors.common.grey,
      marginTop: 5,
    },
    pressed: {
      opacity: 0.7,
    },
  });
}

export default Ring;