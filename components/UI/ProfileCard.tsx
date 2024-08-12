import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface PatientProps {
  caseID: number,
  name: string,
  surgery: string,
  age: number,
  profileImage: string,
  gender: string,
  hospital: string,
  duration: string,
  status: string
}

const ProfileCard = ({ caseID, name, surgery, duration, profileImage, status, age, gender, hospital }: PatientProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const onPress = () => {
    const screen = status === 'inactive' ? 'ActivateCase' : 'PatientDashboard'
    navigation.navigate(screen, {
      caseID
    })
  }
  return (

    <View style={[styles.card, status && styles[status]]}>
      <Image source={{ uri: profileImage }} style={styles.image} />
      <View style={styles.details}>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => [pressed && styles.pressed]}
          onPress={onPress}
        >

          <Text style={styles.caseID}>Case ID: {caseID}</Text>
          <Text style={styles.text}>Name:{name}</Text>
          <Text style={styles.text}>Surgery: {surgery}</Text>
          <Text style={styles.text}>Duration: {duration}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  inactive: {
    borderColor: 'orange'
  },
  active: {
    borderColor: 'green'
  },
  complete: {
    borderColor: '#10e3ee'
  },
  image: {
    width: 100,
    height: 120,
    marginRight: 10,
  },
  details: {
    justifyContent: 'flex-end',
    width: '100%',
  },
  caseID: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default ProfileCard;