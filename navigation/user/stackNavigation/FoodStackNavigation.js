import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {UnWrittenCommentData} from "../../../screen/supplier/review/UnWrittenCommentData";
import { View } from "react-native";
import Back from "../../../assets/icon_back.svg";
import { ProductList } from "../../../screen/food/ProductList";
import { ProductDetail } from "../../../screen/food/ProductDetail";
import { ProductListForm } from "../../../component/user/food/ProductListForm";

const Stack = createStackNavigator();

const FoodStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerTitle: 'i-Fresh',
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
        name="ProductList"
        component={ProductList}
        options={{
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
      />

      <Stack.Screen
        name="ProductListForm"
        component={ProductListForm}
        options={{
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
      />

    </Stack.Navigator>
  )
};

export default FoodStackNavigation;