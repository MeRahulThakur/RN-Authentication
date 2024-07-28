import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Pressable } from 'react-native';
import IconButton from './IconButton';

interface PatientProps {
  caseID: number,
  name: string,
  surgery: string,
  age: number,
  profileImage: string,
  gender: string,
  hospital: string,
  status: string
}

const CollapsibleCard = ({ caseID, name, surgery, age, profileImage, gender, hospital }: PatientProps) => {
  const [expanded, setExpanded] = useState(false);
  const [heightAnimation] = useState(new Animated.Value(70)); // Initial collapsed height

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(heightAnimation, {
      toValue: expanded ? 70 : 140, // Change height based on expanded state
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const editProfile = () => {
    console.log('pressed edit profile')
  }

  return (
    <Animated.View style={[styles.card, { height: heightAnimation }]}>
      <View style={styles.header}>
        <IconButton icon={expanded ? 'arrow-up' : 'arrow-down'} color='black' size={20} onPress={toggleExpand} />
      </View>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: profileImage }}
          style={expanded ? styles.imageExpanded : styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>Patient ID: {caseID}</Text>
          {expanded && (
            <>
              <Text>Age: {age}</Text>
              <Text>Gender: {gender}</Text>
              <Text>Hospital: {hospital}</Text>
              <Text>Surgery: {surgery}</Text>
            </>
          )}
        </View>
      </View>
      {expanded && <View style={styles.footer}>
        <IconButton icon='pencil' color='black' size={20} onPress={editProfile} />
      </View>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 0,
    overflow: 'hidden',
    elevation: 2, // For Android shadow
    shadowColor: 'black', // For iOS shadow
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  header: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
  },
  footer: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 0,
  },
  imageExpanded: {
    width: 120,
    height: 120,
    borderRadius: 0,
  },
  userInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 14,
    color: '#666',
  }
});

export default CollapsibleCard;