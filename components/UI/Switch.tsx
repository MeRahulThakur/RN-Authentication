import React, { useState } from 'react';
import { ColorSchemeName, View, Text, Switch, StyleSheet, Platform } from 'react-native';

import { Colors } from '../../constants/colors';
import { useTheme } from '../../hooks/useTheme';

const CustomSwitch: React.FC = () => {
  const {colorScheme} = useTheme()
  const styles = getStyles(colorScheme)
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={[styles.switchContainer, isEnabled ? styles.on : styles.off]}>
        <Text style={[styles.switchText]}>
          {isEnabled ? 'On' : 'Off'}
        </Text>
        <Switch
          trackColor={{ false: Colors.common.grey, true: Colors[colorScheme?? 'light'].primary500 }}
          thumbColor={Colors.common.white}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={[styles.switch, Platform.OS==='ios' && styles.switchTransform]}
        />
      </View>
    </View>
  );
};

const getStyles = (colorScheme: ColorSchemeName) => {
return StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.common.white,
    borderRadius: 20,
    paddingLeft: 7,
    width: Platform.OS==='android' ? 56 : 70,
    height: Platform.OS==='android' ? 15 : 24,
    justifyContent: 'space-evenly',
  },
  switchText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.common.white,
  },
  on: {
    backgroundColor: Colors[colorScheme?? 'light'].primary500,
  },
  off: {
    backgroundColor: Colors.common.grey,
  },
  switch: {
    marginLeft: 0,
    //zIndex: 1,
  },
  switchTransform: {
    transform: [{ scaleX: .7 }, { scaleY: .7 }]
  }
});
}

export default CustomSwitch;