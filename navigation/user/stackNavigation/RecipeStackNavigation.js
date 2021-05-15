import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
import Back from "../../../assets/icon_back.svg";
import { RecipeList } from "../../../screen/recipe/RecipeList";

const Stack = createStackNavigator();

const RecipeStackNavigation = () => {
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
        name="RecipeList"
        component={RecipeList}
        options={{
          headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
      />


    </Stack.Navigator>
  )
};

export default RecipeStackNavigation;
