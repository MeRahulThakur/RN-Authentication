import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CollapsibleCard from '../components/UI/CollapsibleCard'
import { cases } from '../data/data';
import { getFormattedDate } from '../util/helper';
import HealthRing from '../components/UI/HealthRing';
import { Colors } from '../constants/colors';

export default function PatientDashboard({ route }) {
  const { caseID } = route.params
  const collapsibleCardProps = cases.find(eachCase => eachCase.caseID === caseID)

  return (
    <View style={styles.rootContainer}>
      {collapsibleCardProps && <CollapsibleCard {...collapsibleCardProps} />}
      <Text style={styles.todaysDate}>{getFormattedDate(new Date())}</Text>
      <View style={styles.rings}>
        <HealthRing value={75} maxValue={100} radius={40} strokeWidth={8} title='Temperature' />
        <HealthRing value={25} maxValue={100} radius={40} strokeWidth={8} title='Skin' />
        <HealthRing value={15} maxValue={100} radius={40} strokeWidth={8} title='Redness' />
      </View>
      <View style={styles.infoBox}>
        <View>
          <Text>Reference</Text>
          <Text>Time: 6:30 am</Text>
        </View>
        <View style={styles.infoBoxRightItem}>
        <Text>At Time</Text>
        <Text>Time: 10:30 am</Text>
        </View>
      </View>
      <View style={[styles.infoBox, styles.chart]}>

      </View>
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
  todaysDate: {
    alignSelf: 'flex-start',
    marginHorizontal: 5,
  },
  rings: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginVertical: 10,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: Colors.common.grey,
    borderWidth: 1,
    width: '100%',
    paddingVertical: 15,
    marginVertical: 10,
  },
  infoBoxRightItem: {
    borderLeftColor: Colors.common.grey,
    borderLeftWidth: 1,
    paddingLeft: 30,
  },
  chart: {

  },
})