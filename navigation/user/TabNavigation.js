import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodStackNavigation from "./stackNavigation/FoodStackNavigation";
import StatisticsStackNavigation from "./stackNavigation/StatisticsStackNavigation";
// import Icon from "react-native-vector-icons/FontAwesome";
import IconVegetable from "../../assets/icon_vegetable.svg";
import OnIconVegetable from "../../assets/icon_vegetable_checked.png";
import IconStatistics from "../../assets/icon_statistics.svg";
import OnIconStatistics from "../../assets/icon_statistics_checked.svg";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#24C58B',
        inactiveTintColor: '#DCDBE6',
        keyboardHidesTabBar: true,
        showIcon: true,
        style: {
          backgroundColor: "#fff",
          elevation: 0,
          borderTopWidth: 0,
          // marginBottom: 10
        },
      }}
    >
      <Tab.Screen
        name="식재료"
        component={FoodStackNavigation}
        options={{
          tabBarLabel: '식품',
          TabBarIcon: ({ focused }) => {
            return focused === true ?
              <IconVegetable /> : <OnIconVegetable />
          }
        }}
      />

      <Tab.Screen
        name="통계"
        component={StatisticsStackNavigation}
        tabBarOptions={{
          tabBarLabel: '통계',
          tabBarIcon: ({ focused }) => {
            return focused === true ?
              <IconStatistics /> : <OnIconStatistics />
          }
        }}
      />

    </Tab.Navigator>
  );
};
export default TabNavigation;
