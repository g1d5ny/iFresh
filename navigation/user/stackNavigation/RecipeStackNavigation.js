import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
// import Back from "../../../assets/icon_back.svg";
import RecipeList from "../../../screen/recipe/RecipeList";
import RecipeListForm from "../../../component/user/recipe/RecipeListForm";
import RecipeDetail from "../../../screen/recipe/RecipeDetail";
import Back from "../../../assets/icon_back.svg";
import RecipeUpload from "../../../screen/recipe/RecipeUpload";

const Stack = createStackNavigator();

const RecipeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerTitle: '레시피',
        headerBackTitleVisible: false,
        headerTitleAlign: 'medium',
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Back />
          </View>
        ),
      }}
    >

      <Stack.Screen
        name="RecipeList"
        component={RecipeList}
        options={{
          // headerTitle: "i-Fresh",
          headerBackImage: () => (
            <View style={{ marginLeft: 15 }}>
              {/*<Back />*/}
            </View>
          ),
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="RecipeListForm"
        component={RecipeListForm}
        options={{
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={({ route }) => ({
          headerTitle: route.params.name,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "tway_air",
          },
        })}
      />

      <Stack.Screen
        name="RecipeUpload"
        component={RecipeUpload}
        options={({ route }) => ({
          headerTitle: '레시피 업로드',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "tway_air",
          },
        })}
      />


    </Stack.Navigator>
  )
};

export default RecipeStackNavigation;
