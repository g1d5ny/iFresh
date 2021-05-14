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
import {LoginPage} from "./screen/auth/LoginPage";
import {LoadingPage} from "./screen/auth/LoadingPage";
import AuthNavigation from "./navigation/auth/AuthNavigation";
import {OnBoardingPage1} from "./screen/auth/OnBoardingPage1";
import {OnBoardingPage2} from "./screen/auth/OnBoardingPage2";
import {OnBoardingPage3} from "./screen/auth/OnBoardingPage3";
import {Register} from "./screen/auth/Register";
import {Login} from "./screen/auth/Login";
import {SearchID1} from "./screen/auth/SearchID1";
import {SearchID2} from "./screen/auth/SearchID2";
import {FindPW} from "./screen/auth/FindPW";
import {ChangePW} from "./screen/auth/ChangePW";
import { ProductList } from "./screen/vegetable/ProductList";
import { ProductDetail } from "./screen/vegetable/ProductDetail";

const App: () => Node = () => {
    return (
        <NavigationContainer>
            {/*<NavController/>*/}
            <ProductDetail />
        </NavigationContainer>
    );
};

export default App;
