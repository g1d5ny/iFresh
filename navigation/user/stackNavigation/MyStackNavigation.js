import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
import Back from "../../../assets/icon_back.svg";
import { Expenditure } from "../../../screen/statistics/Expenditure";
import MyPage from "../../../screen/my/MyPage";
import MyEdit from "../../../screen/my/MyEdit";
import MyRecipe from "../../../screen/my/MyRecipe";
import RecipeDetail from "../../../screen/recipe/RecipeDetail";
import WishRecipe from "../../../screen/my/WishRecipe";
import Information from "../../../screen/my/Information";
import Withdrawal from "../../../screen/my/Withdrawal";
import { LoginPage } from "../../../screen/auth/Login/LoginPage";

const Stack = createStackNavigator();

const MyStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerTitle: "마이페이지",
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
        name="My"
        component={MyPage}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="MyEdit"
        component={MyEdit}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="MyRecipe"
        component={MyRecipe}
        options={{
          headerTitle: '마이레시피',
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="WishRecipe"
        component={WishRecipe}
        options={{
          headerTitle: '위시레시피',
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          headerTitle: '이용 안내',
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="Withdrawal"
        component={Withdrawal}
        options={{
          headerTitle: '회원 탈퇴',
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'tway_air'
          }
        }}
      />

      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          // headerTitle: '회원 탈퇴',
          headerShown: false,
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



    </Stack.Navigator>
  )
};

export default MyStackNavigation;
