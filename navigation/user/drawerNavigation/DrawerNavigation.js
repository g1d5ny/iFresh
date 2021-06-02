import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProductDetail } from "../../../screen/food/ProductDetail";
import FoodStackNavigation from "../stackNavigation/FoodStackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={FoodStackNavigation}/>
      <Drawer.Screen name="ProductDetail" component={ProductDetail}
                     options={({ route }) => ({
                       title: route.params.name,
                       // headerBackTitleVisible: false,
                       fontSize: 16,
                       // fontWeight: "bold",
                       fontFamily: "tway_air",
                     })} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigation };
