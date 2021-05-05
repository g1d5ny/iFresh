import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import {AuthStyle} from "../../styles/auth/AuthStyle";

const SearchID2 = ({}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{marginTop: 100}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>아이디 조회 결과</Text>
                    </View>
                    <View style={{marginTop: 150, marginBottom: 200}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: "#24C58B"}}>jiwon9366**@gmail.com</Text>
                    </View>
                    <TouchableOpacity style={AuthStyle.nextButton}>
                        <Text style={AuthStyle.buttonText}>로그인 하러 가기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 300,
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 10,
                        borderRadius: 5,
                        backgroundColor: "#F4F5F8"
                    }}>
                        <Text style={{
                            color: "#2d2d2d",
                            fontWeight: 'bold',
                            fontSize: 12
                        }}>비밀번호 찾기</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export {SearchID2};
