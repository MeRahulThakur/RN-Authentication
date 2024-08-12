import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import IconButton from '../UI/IconButton';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import ScrollablePopupMenu from '../UI/ScrollablePopupMenu';

const CustomDrawerHeader: React.FC<DrawerHeaderProps> = ({ navigation, options }) => {
  const [visible, setVisible] = useState(false);
  const menuItems = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  const toggleMenu = () => {
    setVisible(!visible);
  };

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
            onPress={toggleMenu}
          />
          {visible && <ScrollablePopupMenu visible={visible} toggleMenu={toggleMenu}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Text style={styles.menuItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollablePopupMenu>}
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
    backgroundColor: '#bf111b',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CustomDrawerHeader;