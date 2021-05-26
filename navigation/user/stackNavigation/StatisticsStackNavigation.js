import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
// import Back from "../../../assets/icon_back.svg";
import { StatisticsTabNavigation } from "../statisticsTabNavigation/StatisticsTabNaviagiton";

const Stack = createStackNavigator();

const StatisticsStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'medium',
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            {/*<Back/>*/}
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="가계부"
        component={StatisticsTabNavigation}
        // options={{headerBackTitleVisible: false}}
        options={{
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />
    </Stack.Navigator>
  )
};

export default StatisticsStackNavigation;
