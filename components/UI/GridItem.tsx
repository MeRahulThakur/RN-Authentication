import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";

const GridItem = ({ title, collapseFeature = true, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <View style={styles.gridItem}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {collapseFeature && <IconButton icon={collapsed ? 'arrow-up' : 'arrow-down'} color='black' size={20} onPress={() => setCollapsed(!collapsed)} />}
      </View>
      {!collapsed && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    width: '48%', // Set width to 48% to create spacing between boxes
    //height: 150, // Fixed height for each box
    backgroundColor: '#f9f9f9', // Green background color
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
    marginBottom: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 10,
    width: '100%',
  },
});

export default GridItem;