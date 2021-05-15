import React, { useEffect } from "react";
import { SafeAreaView, View, Image,} from "react-native";

const LoadingPage = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("OnBoardingPage1");
        }, 3000);
    });

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#24C58B', justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/img_loading.png')}/>
            </View>
        </SafeAreaView>
    );
};

export {LoadingPage};
