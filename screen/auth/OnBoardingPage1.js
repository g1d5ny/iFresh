import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text, Animated, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import {AuthStyle} from "../../styles/auth/AuthStyle";

const OnBoardingPage1 = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/img_OnBoarding1.png')} style={AuthStyle.onBoardingImage}/>
                <View style={{alignItems: 'center', marginTop: 80}}>
                    <Text style={AuthStyle.step}>ONE Step</Text>
                    <Text style={AuthStyle.onBoardingText}>간편한 식재료 영수증 인식!</Text>
                </View>
                <View style={AuthStyle.stepLine}>
                    <View style={{
                        width: '33%',
                        borderWidth: 1,
                        borderColor: '#24C58B',
                    }}/>
                </View>
                <View style={{width: '80%', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={AuthStyle.skipView}>
                        <Text style={AuthStyle.skipText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={AuthStyle.nextView}
                    onPress={() => navigation.navigate('OnBoardingPage2')}>
                        <Text style={AuthStyle.nextText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export {OnBoardingPage1};
