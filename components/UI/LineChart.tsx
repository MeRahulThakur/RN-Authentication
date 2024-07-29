import React, { useState } from "react";
import {
  Circle,
  LinearGradient,
  useFont,
  vec,
} from "@shopify/react-native-skia";
import { View } from "react-native";
import { useDerivedValue, type SharedValue } from "react-native-reanimated";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";

import { Text as SKText } from "@shopify/react-native-skia";
import { useTheme } from '../../hooks/useTheme';
//import { patientReadingsData as DATA } from "../../data/data";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  time: i,
  skin: 40 + 30 * Math.random(),
  redness: 20 + 30 * Math.random(),
  temperature: 60 + 30 * Math.random(),
}));

const inter = require("../../assets/roboto.ttf");
const interBold = require("../../assets/roboto-bold.ttf");

export const LineChart = () => {
  const font = useFont(inter, 12);
  const chartFont = useFont(interBold, 30);
  const { state, isActive } = useChartPressState({ x: 0, y: { time: 0, skin: 0, redness: 0, temperature: 0} });
  const {colorScheme} = useTheme();
  const [chartData, setChartData] = useState(DATA);console.log('data-',DATA)

  const value = useDerivedValue(() => {
    return state.y.temperature.value.value.toFixed(2);
  }, [state]);

  const labelColor = colorScheme === "dark" ? "grey" : "black";
  const lineColor = colorScheme === "dark" ? "lightgrey" : "black";

  return (
      <View style={{paddingTop:10,width:'100%', height:'80%'}}>
        <CartesianChart
          data={chartData}
          xKey="time"
          yKeys={["temperature"]}
          domainPadding={{ top: 50 }}
          axisOptions={{
            font,
            labelColor,
            lineColor,
          }}
          chartPressState={state}
        >
          {({ points, chartBounds }) => (
            <>
              <SKText
                x={chartBounds.left + 10}
                y={40}
                font={chartFont}
                text={value}
                color={labelColor}
                style={"fill"}
              />
              <Line
                points={points.temperature}
                color="lightgreen"
                strokeWidth={3}
                animate={{ type: "timing", duration: 500 }}
              />
              <Area
                points={points.temperature}
                y0={chartBounds.bottom}
                animate={{ type: "timing", duration: 500 }}
              >
                <LinearGradient
                  start={vec(chartBounds.bottom, 300)}
                  end={vec(chartBounds.bottom, chartBounds.bottom)}
                  colors={["green", "#90ee9050"]}
                />
              </Area>

              {isActive ? (
                <ToolTip x={state.x.position} y={state.y.temperature.position} />
              ) : null}
            </>
          )}
        </CartesianChart>
      </View>
  );
};

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={"grey"} opacity={0.8} />;
}