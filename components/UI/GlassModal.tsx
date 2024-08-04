import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import IconButton from './IconButton';
import FlatButton from './FlatButton';
import { Colors } from '../../constants/colors';

interface GlassModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  closeButton: boolean;
  title?: string;
  children: React.ReactNode;
  modalActions: boolean;
}

const GlassModal: React.FC<GlassModalProps> = ({ visible, closeButton, onClose, onSubmit, title, children, modalActions }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <View style={styles.modalContainer}>
            <View style={[styles.modalHeader, !title && styles.modalHeaderWithoutTitle]}>
              {title && <Text style={styles.title}>{title}</Text>}
              {closeButton && <IconButton icon='close' size={20} color='black' onPress={onClose} />}
            </View>
            <View style={styles.modalBody}>
              {children}
            </View>
            {modalActions &&
              <View style={styles.modalActions}>
                <FlatButton onPress={onClose}>Close</FlatButton>
                <FlatButton onPress={onSubmit}>Ok</FlatButton>
              </View>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    //backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
  },
  modalContainer: {
    width: '80%',
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)', // White background with transparency
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeaderWithoutTitle: {
    justifyContent: 'flex-end',
  },
  modalBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    marginTop: 5,
    paddingTop: 2,
    borderTopColor: Colors.common.grey,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GlassModal;