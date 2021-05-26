import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodStackNavigation from "./stackNavigation/FoodStackNavigation";
import StatisticsStackNavigation from "./stackNavigation/StatisticsStackNavigation";
// import Icon from "react-native-vector-icons/FontAwesome";
import IconFood from "../../assets/icon_food.svg";
import OnIconFood from "../../assets/icon_food_checked.svg";
import IconStatistics from "../../assets/icon_statistics.svg";
import IconRecipe from "../../assets/icon_recipe.svg"
import OnIconRecipe from "../../assets/icon_recipe_checked.svg"
import IconMy from "../../assets/icon_my.svg";
import OnIconMy from "../../assets/icon_my_checked.svg";
import OnIconStatistics from "../../assets/icon_statistics_checked.svg";
import RecipeStackNavigation from "./stackNavigation/RecipeStackNavigation";
import MyStackNavigation from "./stackNavigation/MyStackNavigation";
import {View, Image, Text} from "react-native";
import Back from "../../assets/icon_back.svg";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#24C58B",
        inactiveTintColor: "#DCDBE6",
        keyboardHidesTabBar: true,
        showIcon: true,
        tabStyle: {
          justifyContent: 'center'
        },
        style: {
          backgroundColor: "#fff",
          elevation: 0,
          borderTopWidth: 0,
          paddingTop: 10
          // marginBottom: 10
        },
      }}
    >
      <Tab.Screen
        name="식품"
        component={FoodStackNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            focused ? <OnIconFood/> : <IconFood/>
              /*<View style={{marginTop: 30}}>
                <Image source={require('../../assets/icon_food.png')}
                       resizeMode="contain"
                       style={{
                         width: 30,
                         height: 30,
                         tintColor: focused ? '#24C58B' : '#DCDBE6'
                       }}
                />

              </View>*/
          )
        }}
      />

      <Tab.Screen
        name="통계"
        component={StatisticsStackNavigation}
        options={{
          tabBarLabel: "",
          // tabBarIcon: ({ focused }) => {
          //   return focused === true ?
          //     <IconStatistics /> : <OnIconStatistics />;
          // },
          tabBarIcon: ({ focused }) => (
            focused ? <OnIconStatistics/> : <IconStatistics/>
            // <View style={{marginTop: 30}}>
            //   <Image source={require('../../assets/icon_statistics.png')}
            //          resizeMode="contain"
            //          style={{
            //            width: 30,
            //            height: 30,
            //            tintColor: focused ? '#24C58B' : '#DCDBE6'
            //          }}
            //   />
            // </View>
          )
        }}
      />

      <Tab.Screen
        name="레시피"
        component={RecipeStackNavigation}
        options={{
          tabBarLabel: "",
          // tabBarIcon: ({ focused }) => {
          //   return focused === true ?
          //     <IconStatistics /> : <OnIconStatistics />;
          // },
          tabBarIcon: ({ focused }) => (
            focused ?
              <OnIconRecipe/>
              : <IconRecipe/>
          //
          // <View style={{marginTop: 30}}>
          //     <Image source={require('../../assets/icon_recipe.png')}
          //            resizeMode="contain"
          //            style={{
          //              width: 30,
          //              height: 30,
          //              tintColor: focused ? '#24C58B' : '#DCDBE6'
          //            }}
          //     />
          //   </View>
          )
        }}
      />

      <Tab.Screen
        name="나의 정보"
        component={MyStackNavigation}
        options={{
          tabBarLabel: "",
          // tabBarIcon: ({ focused }) => {
          //   return focused === true ?
          //     <IconStatistics /> : <OnIconStatistics />;
          // },
          tabBarIcon: ({ focused }) => (
            focused ? <OnIconMy/> : <IconMy/>
            // <View style={{marginTop: 30}}>
            //   <Image source={require('../../assets/icon_user.png')}
            //          resizeMode="contain"
            //          style={{
            //            width: 30,
            //            height: 30,
            //            tintColor: focused ? '#24C58B' : '#DCDBE6'
            //          }}
            //   />
            // </View>
          )
        }}
      />

    </Tab.Navigator>
  );
};
export default TabNavigation;
