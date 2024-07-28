import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface HealthRingProps {
  value: number; // Current value
  maxValue: number; // Maximum value
  radius: number; // Radius of the ring
  strokeWidth: number; // Width of the ring
  title: string;
}

const HealthRing: React.FC<HealthRingProps> = ({ value, maxValue, radius, strokeWidth, title }) => {
  const normalizedValue = (value / maxValue) * 100; // Normalize the value to percentage
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (normalizedValue / 100) * circumference; // Calculate the offset

  return (
    <View style={styles.container}>
      <Svg height={radius*2} width={radius*2} viewBox="-10 -10 100 100">
        <Circle
          stroke="#e6e6e6" // Background circle color
          fill="none"
          cx={radius}
          cy={radius}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#4caf50" // Progress color
          fill="none"
          cx={radius}
          cy={radius}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </Svg>
      {/* <Text style={styles.valueText}>{value} / {maxValue}</Text> */}
      <Text style={styles.valueText}>{value}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    padding: 5,
  },
  titleText: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default HealthRing;