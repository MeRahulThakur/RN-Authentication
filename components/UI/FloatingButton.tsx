import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Pressable, View, Text } from 'react-native';
import { Colors } from '../../constants/colors';

interface FloatingButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  color: string | undefined;
  size: number;
  onPress: () => void;
  position?: { top?: number; bottom?: number; left?: number; right?: number };
  label?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ iconName, onPress, position, label, color, size }) => {
  return (
    <View style={[position?styles.absoluteContainer:styles.container, position && position]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Ionicons name={iconName} color={color} size={size} />
        {label && <Text style={styles.label}>{label}</Text>}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  absoluteContainer: {
    position: 'absolute',
  },
  button: {
    backgroundColor: Colors.common.grey,
    borderRadius: 50,
    padding: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  label: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default FloatingButton;