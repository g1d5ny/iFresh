import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
import Back from "../../../assets/icon_back.svg";

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
            <Back/>
          </View>
        ),
      }}
    >


    </Stack.Navigator>
  )
};

export default StatisticsStackNavigation;
