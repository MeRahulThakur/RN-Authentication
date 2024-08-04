import { ColorSchemeName, View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

import { Colors } from '../../constants/colors';
import { useTheme } from '../../hooks/useTheme';

interface InputProps {
  label: string,
  type: string,
  keyboardType?: KeyboardTypeOptions,
  secure?: boolean,
  onUpdateValue: (value: string, type: string) => void,
  value: string,
  isInvalid: boolean,
}

function Input({
  label,
  type,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: InputProps) {
  const { colorScheme } = useTheme()
  const styles = getStyles(colorScheme)

  const handleTextChange = (text: string) => {
    onUpdateValue(type,text);
  };

  return (
    <View style={styles.inputContainer}>
      {/* <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}rr
      </Text> */}
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        //autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={handleTextChange}
        //value={value}
        placeholder={label}
        placeholderTextColor={Colors[colorScheme?? 'light'].textColor}
      />
    </View>
  );
}

export default Input;

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    inputContainer: {
      marginVertical: 8,
    },
    label: {
      color: 'black',
      marginBottom: 4,
    },
    labelInvalid: {
      color: Colors[colorScheme?? 'light'].error500,
    },
    input: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: Colors[colorScheme?? 'light'].primary100,
      borderColor: Colors.common.grey,
      borderRadius: 50,
      borderWidth: 1,
      fontSize: 16,
      minWidth: '100%',
    },
    inputInvalid: {
      backgroundColor: Colors[colorScheme?? 'light'].error100,
    },
  });
}