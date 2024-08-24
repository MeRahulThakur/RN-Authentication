import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Zone from '../components/Zone/Zone'
import RefUnitZone from '../components/Zone/RefUnitZone'

export default function Notifications() {
  return (
    <View style={styles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Zone title="Zone 1" />
        <Image style={styles.connector} source={require('../assets/connector.png')} resizeMode='cover' />
        <Zone title="Zone 2" />
        <Image style={styles.connector} source={require('../assets/connector.png')} />
        <Zone title="Zone 3" />
        <Image style={styles.connector} source={require('../assets/connector.png')} />
        <Zone title="Zone 4" />
        <RefUnitZone />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  connector: {
    alignSelf: 'center',
    marginLeft: 40,
    width: 90,
    height: 50
  },
})