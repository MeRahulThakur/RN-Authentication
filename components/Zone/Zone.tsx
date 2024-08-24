import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from '../UI/IconButton';

interface ZoneProps {
  title: string;
}

const Zone = ({ title }: ZoneProps) => {
  return (
    <View style={styles.zone}>
      <Text style={styles.zoneTitle}>{title}</Text>
      <View style={styles.box}>
        <View style={[styles.box1, styles.bgOrange]}>
          <Text style={styles.valueLarge}>40°<Text style={styles.unit}>c</Text></Text>
          <Text style={styles.title}>Temp</Text>
        </View>
        <View style={[styles.box2, styles.bgBlue]}>
          <Text style={styles.valueLarge}>85</Text>
          <Text style={styles.title}>Sp02</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.valueLarge}>3%<IconButton icon="arrow-up" color='red' size={15} onPress={()=>{}}/></Text>
          <Text style={styles.title}>Redness</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.valueFraction}>103.3</Text>
          <View style={styles.denominator}><Text style={styles.valueFraction}>1.68°</Text></View>
          <Text style={styles.title}>BIA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  zone: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoneTitle: {
    fontSize: 15,
    transform: [{ rotate: '270deg' }],
  },
  box: {
    overflow: 'hidden',
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  // compartment: {
  //   width: '50%',
  //   height: '50%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#e0e0e0',
  //   //borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: '#787272'
  // },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: '50%',
    height: '50%',
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderBottomWidth: 1,
    width: '50%',
    height: '50%',
  },
  box3: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#000',
    width: '50%',
    height: '50%',
  },
  box4: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
  },
  bgOrange: {
    backgroundColor: '#f7995ec1'
  },
  bgBlue: {
    backgroundColor: '#7ec8e6ae'
  },
  valueLarge: {
    fontSize: 30,
  },
  title: {
    fontSize: 15,
    color: 'grey',
  },
  unit: {
    fontSize: 20,
    color: 'grey',
  },
  valueFraction: {
    fontSize: 20,
  },
  denominator: {
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Zone;