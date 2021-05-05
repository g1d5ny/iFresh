import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View } from "react-native";
import Back from "../../assets/icon_back.svg";
import {ChangePW} from "../../screen/auth/ChangePW";
import {FindPW} from "../../screen/auth/FindPW";
import {Register} from "../../screen/auth/Register";
import {SearchID1} from "../../screen/auth/SearchID1";
import {SearchID2} from "../../screen/auth/SearchID2";
import {Login} from "../../screen/auth/Login";

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerTitleAlign: 'medium',
                headerShown: false,
                headerBackImage: () => (
                    <View style={{marginLeft: 15}}>
                        <Back/>
                    </View>
                ),
            }}
        >

            <Stack.Screen
                name="SearchID1"
                component={SearchID1}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="ChangePW"
                component={ChangePW}
            />

            <Stack.Screen
                name="FindPW"
                component={FindPW}
            />

            <Stack.Screen
                name="Register"
                component={Register}
            />

            <Stack.Screen
                name="SearchID2"
                component={SearchID2}
            />

        </Stack.Navigator>
    )
};

export default AuthNavigation;
