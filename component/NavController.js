import React, {useState} from 'react';
import AuthNavigation from '../navigation/auth/AuthNavigation';
import TabNavigation from "../navigation/user/TabNavigation";
import {SafeAreaView} from 'react-native';

export default () => {
    const [login, setLogin] = useState(false);

    return (
        <SafeAreaView style={{flex:1}}>
            {login === false ? <AuthNavigation /> : <TabNavigation />}
        </SafeAreaView>
        )
};
