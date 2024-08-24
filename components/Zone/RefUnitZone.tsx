import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../UI/IconButton'

const RefUnitZone = () => {
  return (
    <View style={styles.zone}>
      <Text style={styles.zoneTitle}>Ref. Unit</Text>
      <View style={styles.box}>
        <View style={styles.box1}>
          <Text style={styles.valueLarge}>40°<Text style={styles.unit}>c</Text></Text>
          <Text style={styles.title}>Temp</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.valueLarge}>3% <IconButton icon="ellipse" color='#87CEEB' size={10} onPress={()=>{}}/></Text>
          <Text style={styles.title}>Redness</Text>
        </View>
      </View>
    </View>
  )
}

export default RefUnitZone

const styles = StyleSheet.create({
  zone: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderBottomWidth: 1,
    width: '100%',
    height: '50%',
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
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
})