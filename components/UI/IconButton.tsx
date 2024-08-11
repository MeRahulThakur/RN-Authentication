import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap,
  color: string | undefined,
  size: number,
  disabled?: boolean,
  onPress: () => void
}

function IconButton({ icon, color, size, onPress, disabled = false }:IconButtonProps) {
  if(disabled){
    return (
      <View style={[styles.button, styles.disabled]}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    )
  }
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  disabled: {
    opacity: 0.2,
  },
  pressed: {
    opacity: 0.7,
  },
});