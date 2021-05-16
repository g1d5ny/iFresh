import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavController from "./component/NavController";
import {LoginPage} from "./screen/auth/Login/LoginPage";
import {LoadingPage} from "./screen/auth/Loading/LoadingPage";
import AuthNavigation from "./navigation/auth/AuthNavigation";
import {OnBoardingPage1} from "./screen/auth/Loading/OnBoardingPage1";
import {OnBoardingPage2} from "./screen/auth/Loading/OnBoardingPage2";
import {OnBoardingPage3} from "./screen/auth/Loading/OnBoardingPage3";
import {SignUp} from "./screen/auth/Register";
import {Login} from "./screen/auth/Login/Login";
import {SearchID1} from "./screen/auth/ID/SearchID1";
import {SearchID2} from "./screen/auth/ID/SearchID2";
import {FindPW} from "./screen/auth/FindPW";
import {ChangePW} from "./screen/auth/PW/ChangePW";
import { ProductList } from "./screen/food/ProductList";
import { ProductDetail } from "./screen/food/ProductDetail";

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    );
};

export default App;
