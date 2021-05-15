import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text, Animated, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import {AuthStyle} from "../../styles/auth/AuthStyle";

const OnBoardingPage3 = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/img_OnBoarding3.png')} style={AuthStyle.onBoardingImage}/>
                <View style={{alignItems: 'center', marginTop: 69}}>
                    <Text style={AuthStyle.step}>THREE Step</Text>
                    <Text style={AuthStyle.onBoardingText}>친구들이 올린 레시피를 통해 오늘 한 끼 해결!</Text>
                </View>
                <View style={AuthStyle.stepLine}>
                    <View style={{
                        width: '66%',
                        borderWidth: 1,
                        borderColor: '#24C58B',
                    }}/>
                </View>
                <View style={{width: '80%', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={AuthStyle.skipView}/>
                    <TouchableOpacity style={AuthStyle.nextView}
                                      onPress={() => navigation.navigate('LoginPage')}>
                        <Text style={AuthStyle.nextText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export {OnBoardingPage3};
