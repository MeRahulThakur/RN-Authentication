import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import GridItem from './GridItem';
import IconButton from "./IconButton";
import CustomSwitch from './Switch';

const Grid = () => {
  const btnHandler = () => {
    console.log('btnHandler')
  }

  const cameraHandler = () => {
    console.log('cameraHandler')
  }

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <GridItem title="Sensor Patch">
          <View style={styles.gridItemConatiner}>
            <View style={styles.deviceDetails}>
              <Text>Device ID: RU20240618</Text>
              <View style={styles.rowCentreXYaxes}>
                <Text>Status</Text>
                <CustomSwitch />
              </View>
            </View>
            <View style={styles.rowCentreXYaxes}>
              <Image source={{ uri: 'https://healthcare-in-europe.com/media/story_section_image/8829/image-01-52566757170-471c82e2d2-o.jpg' }} style={styles.sensorImgGrey} />
              <View style={styles.qrBtn}>
                <IconButton icon='qr-code-outline' color='black' size={30} onPress={cameraHandler} />
              </View>
            </View>
          </View>
        </GridItem>
        <GridItem title="Reference Unit">
          <View style={styles.gridItemConatiner}>
            <View style={styles.deviceDetails}>
              <Text>Device ID: RU20240618</Text>
              <View style={styles.rowCentreXYaxes}>
                <Text>Status</Text>
                <CustomSwitch />
              </View>
            </View>
            <View style={styles.rowCentreXYaxes}>
              <Image source={{ uri: 'https://img.medicalexpo.com/images_me/photo-mg/80006-15917958.webp' }} style={styles.sensorImgGrey} resizeMode='cover' />
              <View style={styles.qrBtn}>
                <IconButton icon='qr-code-outline' color='black' size={30} onPress={cameraHandler} />
              </View>
            </View>
          </View>
        </GridItem>
        <GridItem title="Sensor Patch Image" collapseFeature={false}>
          <View style={styles.gridItemConatiner}>
            <Image source={{ uri: 'https://healthcare-in-europe.com/media/story_section_image/8829/image-01-52566757170-471c82e2d2-o.jpg' }} style={styles.sensorImg} resizeMode='cover' />
            <View style={styles.cameraBtn}>
              <IconButton icon='camera' color='black' size={15} onPress={cameraHandler} />
            </View>
          </View>
        </GridItem>
        <GridItem title="Reference Unit Image" collapseFeature={false}>
          <View style={styles.gridItemConatiner}>
            <Text style={{marginVertical:45}}>Upload Reference unit image</Text>
            <View style={styles.cameraBtn}>
              <IconButton icon='camera' color='black' size={15} onPress={cameraHandler} />
            </View>
          </View>
        </GridItem>
      </View>
      <View style={styles.button}>
        <Button onPress={btnHandler}>Sync Device</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 5,
  },
  gridItemConatiner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceDetails: {
    justifyContent: 'center',
  },
  rowCentreXYaxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sensorImg: {
    width: 100,
    height: 100,
    margin: 10,
  },
  sensorImgGrey: {
    width: 100,
    height: 50,
    margin: 10,
    opacity: 0.3,
  },
  button: {
    alignSelf: 'stretch',
  },
  cameraBtn: {
    //zIndex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  qrBtn: {
    alignSelf: 'flex-end'
  }
});

export default Grid;