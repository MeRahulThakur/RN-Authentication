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
import IconButton from "../UI/IconButton";
//import { patientReadingsData as DATA } from "../../data/data";

const DATA = Array.from({ length: 50 }, (_, i) => ({
  time: i,
  skin: 40 + 30 * Math.random(),
  redness: 20 + 30 * Math.random(),
  temperature: 60 + 30 * Math.random(),
}));

const inter = require("../../assets/roboto.ttf");
const interBold = require("../../assets/roboto-bold.ttf");

export const LineChart = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(DATA.length / itemsPerPage);
  const currentItems = DATA.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const font = useFont(inter, 12);
  const chartFont = useFont(interBold, 30);
  const { state, isActive } = useChartPressState({ x: 0, y: { time: 0, skin: 0, redness: 0, temperature: 0} });
  const {colorScheme} = useTheme();
  const [chartData, setChartData] = useState(DATA);

  const value = useDerivedValue(() => {
    return state.y.temperature.value.value.toFixed(2);
  }, [state]);

  const labelColor = colorScheme === "dark" ? "grey" : "black";
  const lineColor = colorScheme === "dark" ? "lightgrey" : "black";

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
      <View style={{paddingTop:10,width:'100%', height:'80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <IconButton icon="arrow-back" size={20} onPress={handlePrevious} color="black" disabled={currentPage === 0}/>
        <CartesianChart
          data={currentItems}
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
        <IconButton icon="arrow-forward" size={20} onPress={handleNext} color="grey" disabled={currentPage >= totalPages - 1} />
      </View>
  );
};

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={"grey"} opacity={0.8} />;
}