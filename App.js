import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavController from "./component/NavController";
import AuthNavigation from "./navigation/auth/AuthNavigation";

const App: () => Node = () => {
    return (
        <NavigationContainer>
            {/*<NavController />*/}
            <AuthNavigation/>
        </NavigationContainer>
    );
};

export default App;
