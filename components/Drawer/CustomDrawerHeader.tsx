import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import IconButton from '../UI/IconButton';
import { DrawerHeaderProps } from '@react-navigation/drawer';

const CustomDrawerHeader: React.FC<DrawerHeaderProps> = ({ navigation, options }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerMenu}>
        <IconButton
          icon="menu"
          color={options.headerTintColor}
          size={23}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View style={styles.headerTitleButton}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Sonar</Text>
          <IconButton
            icon="ellipsis-vertical"
            color={options.headerTintColor}
            size={23}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Hi Dr. Abc</Text>
          <IconButton
            icon="notifications"
            color={options.headerTintColor}
            size={22}
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#bf111b',
  },
  headerMenu: {
    alignSelf: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitleButton: {
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomDrawerHeader;