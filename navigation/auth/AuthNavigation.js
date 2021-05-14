import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Back from "../../assets/icon_back.svg";
import { ChangePW } from "../../screen/auth/ChangePW";
import { FindPW } from "../../screen/auth/FindPW";
import { Register } from "../../screen/auth/Register";
import { SearchID1 } from "../../screen/auth/SearchID1";
import { SearchID2 } from "../../screen/auth/SearchID2";
import { Login } from "../../screen/auth/Login";
import { LoginPage } from "../../screen/auth/LoginPage";
import { LoadingPage } from "../../screen/auth/LoadingPage";
import TabNavigation from "../user/TabNavigation";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
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
        name="LoginPage"
        component={LoginPage}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitle: "로그인 페이지",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
      />

      <Stack.Screen
        name="SearchID1"
        component={SearchID1}
        options={{
          headerShown: true,
          headerTitle: "아이디 찾기",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
      />

      {/*<Stack.Screen*/}
      {/*  name="SearchID2"*/}
      {/*  component={SearchID2}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    headerTitle: "아이디 찾기",*/}
      {/*    headerTitleStyle: {*/}
      {/*      fontSize: 16,*/}
      {/*      fontWeight: 'bold'*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<Stack.Screen*/}
      {/*  name="ChangePW"*/}
      {/*  component={ChangePW}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    headerTitle: "비밀번호 변경",*/}
      {/*    headerTitleStyle: {*/}
      {/*      fontSize: 16,*/}
      {/*      fontWeight: 'bold'*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<Stack.Screen*/}
      {/*  name="FindPW"*/}
      {/*  component={FindPW}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    headerTitle: "비밀번호 찾기",*/}
      {/*    headerTitleStyle: {*/}
      {/*      fontSize: 16,*/}
      {/*      fontWeight: 'bold'*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<Stack.Screen*/}
      {/*  name="Register"*/}
      {/*  component={Register}*/}
      {/*/>*/}

      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
      />

    </Stack.Navigator>
  );
};

export default AuthNavigation;
