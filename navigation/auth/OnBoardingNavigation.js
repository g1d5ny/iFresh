import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
import Back from "../../assets/icon_back.svg";
import {LoadingPage} from "../../screen/auth/LoadingPage";
import {LoginPage} from "../../screen/auth/LoginPage";
import {OnBoardingPage1} from "../../screen/auth/OnBoardingPage1";
import {OnBoardingPage2} from "../../screen/auth/OnBoardingPage2";
import {OnBoardingPage3} from "../../screen/auth/OnBoardingPage3";

const Stack = createStackNavigator();

const OnBoardingNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerShown: false,
            }}>

            <Stack.Screen
                name="LoadingPage"
                component={LoadingPage}
            />

            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
            />

            <Stack.Screen
                name="OnBoardingPage1"
                component={OnBoardingPage1}
            />

            <Stack.Screen
                name="OnBoardingPage2"
                component={OnBoardingPage2}
            />

            <Stack.Screen
                name="OnBoardingPage3"
                component={OnBoardingPage3}
            />

        </Stack.Navigator>
    )
};

export default OnBoardingNavigation;
