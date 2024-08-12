import { Modal, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

interface ScrollablePopupMenuProps {
  visible: boolean;
  toggleMenu: () => void
}

export default function ScrollablePopupMenu({ visible, toggleMenu, children }: PropsWithChildren<ScrollablePopupMenuProps>) {
  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="fade" visible={visible} onRequestClose={toggleMenu}>
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleMenu}>
          <View style={styles.popupContainer}>
            <ScrollView style={styles.scrollView}>
              {children}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  modalOverlay: {
    flex: 1,
    marginTop:Platform.OS === 'android' ? 10: 56,
    marginRight:10,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0)',

  },
  popupContainer: {
    width: '50%',
    maxHeight: '40%',
    backgroundColor: '#a5a0a0eb',
    borderRadius: 10,
    paddingHorizontal: 16,
    elevation: 5,
  },
  scrollView: {
    marginTop: 10,
  },
})