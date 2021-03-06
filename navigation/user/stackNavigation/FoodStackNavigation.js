import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image } from "react-native";
import Back from "../../../assets/icon_back.svg";
import { ProductList } from "../../../screen/food/ProductList";
import { ProductDetail } from "../../../screen/food/ProductDetail";
import { ProductListForm } from "../../../component/user/food/ProductListForm";
import { Camera } from "../../../screen/food/Camera";
import { ProductAdd } from "../../../screen/food/ProductAdd";

const Stack = createStackNavigator();

const FoodStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        // headerTitle: "i-Fresh",
        headerBackTitleVisible: false,
        headerTitleAlign: "medium",
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Back />
          </View>
        ),
      }}
    >

      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "tway_air",
          },
          headerBackImage: () => (
            <View style={{ marginLeft: 15 }}>
              {/*<Back />*/}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ProductListForm"
        component={ProductListForm}
        options={{
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "tway_air",
          },
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({
          title: route.params.name,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "tway_air",
          },
        })}
        // options={{
        //   headerTitle: "????????????",
        //   headerTitleStyle: {
        //     fontSize: 16,
        //     fontWeight: 'bold',
        //     fontFamily: 'tway_air'
        //   }
        // }}
      />

      <Stack.Screen
        name="ProductAdd"
        component={ProductAdd}
        options={{
          headerTitle: "?????? ??????",
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "tway_air",
          },
        }}
      />

      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
          // headerTitle: "i-Fresh",
          headerTitleStyle: {
            fontSize: 16,
            // fontWeight: "bold",
          },
        }}
      />

    </Stack.Navigator>
  );
};

export default FoodStackNavigation;
