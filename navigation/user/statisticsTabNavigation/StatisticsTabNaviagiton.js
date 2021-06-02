import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Expenditure } from "../../../screen/statistics/Expenditure";
import { Category } from "../../../screen/statistics/Category";

const Tab = createMaterialTopTabNavigator();

const StatisticsTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2D2D2D',
        indicatorStyle: {
          borderBottomColor: '#24C58B',
          borderBottomWidth: 2,
        },
        tabStyle: {
          //alignSelf: 'center',
        },
        labelStyle: {
          // fontWeight: 'bold',
          fontFamily: 'tway_air',
          fontSize: 12,
        },
        headerStyle: {
          elevation: 0,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Expenditure" component={Expenditure} options={{
        tabBarLabel: '지출',
        fontFamily: 'tway_air'
      }}
      />
      <Tab.Screen name="Category" component={Category} options={{
        tabBarLabel: '범주'
      }}
      />

    </Tab.Navigator>
  )
}

export {StatisticsTabNavigation};
