import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodStackNavigation from "./stackNavigation/FoodStackNavigation";
import StatisticsStackNavigation from "./stackNavigation/StatisticsStackNavigation";
// import Icon from "react-native-vector-icons/FontAwesome";
import IconFood from "../../assets/icon_food.svg";
import OnIconFood from "../../assets/icon_food_checked.png";
import IconStatistics from "../../assets/icon_statistics.svg";
import OnIconStatistics from "../../assets/icon_statistics_checked.svg";
import RecipeStackNavigation from "./stackNavigation/RecipeStackNavigation";
import MyStackNavigation from "./stackNavigation/MyStackNavigation";


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
        name="식품"
        component={FoodStackNavigation}
        options={{
          tabBarLabel: '식품',
          TabBarIcon: ({ focused }) => {
            return focused === true ?
              <IconFood /> : <OnIconFood />
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

      <Tab.Screen
        name="레시피"
        component={RecipeStackNavigation}
        tabBarOptions={{
          tabBarLabel: '레시피',
          tabBarIcon: ({ focused }) => {
            return focused === true ?
              <IconStatistics /> : <OnIconStatistics />
          }
        }}
      />

      <Tab.Screen
        name="나의 정보"
        component={MyStackNavigation}
        tabBarOptions={{
          tabBarLabel: '나의 정보',
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
