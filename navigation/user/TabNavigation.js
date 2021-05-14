import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VegetableStackNavigation from "./stackNavigation/VegetableStackNavigation";
import StatisticsStackNavigation from "./stackNavigation/StatisticsStackNavigation";
import IconVegetable from "../../assets/icon_vegetable.svg";
import OnIconVegetable from "../../assets/icon_vegetable_checked.svg";
import IconStatistics from "../../assets/icon_statistics.svg";
import OnIconStatistics from "../../assets/icon_statistics_checked.svg";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "#24C58B",
        inactiveTintColor: "#DCDBE6",
        showIcon: true,
        style: {
          backgroundColor: "#fff",
          elevation: 0,
          borderTopWidth: 0,
          // marginBottom: 0
        },
      }}
    >
      <Tab.Screen
        name="VegetableStackNavigation"
        component={VegetableStackNavigation}
        options={{
          tabBarLabel: '채소',
          tabBarIcon: ({ focused }) => {
            return focused === true ?
              <IconVegetable /> : <OnIconVegetable />
          },
        }}
      />

      <Tab.Screen
        name="StatisticsStackNavigation"
        component={StatisticsStackNavigation}
        options={{
          tabBarLabel: '통계',
          tabBarIcon: ({ focused }) => {
            return focused === true ?
              <IconStatistics /> : <OnIconStatistics />
          },
        }}
      />

    </Tab.Navigator>
  );
};
export default TabNavigation;
