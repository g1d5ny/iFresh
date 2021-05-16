import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import {AuthStyle} from "../../../styles/auth/AuthStyle";

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{marginTop: 250}}>
                        <Text style={AuthStyle.list}>아이디</Text>
                        <TextInput
                            placeholder={"아이디"}
                            style={AuthStyle.input}
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <View>
                            <Text style={AuthStyle.list}>비밀번호</Text>
                            <TextInput
                                placeholder={"비밀번호"}
                                style={AuthStyle.input}
                            />
                        </View>
                    </View>
                    <View style={{marginTop: 150}}>
                        <TouchableOpacity style={AuthStyle.nextButton}
                        onPress={() => navigation.navigate('TabNavigation')}>
                            <Text style={AuthStyle.buttonText}>로그인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export {Login};
