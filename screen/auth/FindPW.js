import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import {AuthStyle} from "../../styles/auth/AuthStyle";

const FindPW = ({}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{marginTop: 250}}>
                        <Text style={AuthStyle.list}>ID(E-mail)</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                placeholder={"ID(E-mail)"}
                                style={AuthStyle.mediumInput}
                            />
                            <TouchableOpacity style={AuthStyle.mediumButton}>
                                <Text style={AuthStyle.buttonText}>인증 번호 발송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <View>
                            <Text style={AuthStyle.list}>인증코드</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    placeholder={"인증코드"}
                                    style={AuthStyle.mediumInput}
                                />
                                <TouchableOpacity style={AuthStyle.mediumButton}>
                                    <Text style={AuthStyle.buttonText}>인증</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 150}}>
                        <TouchableOpacity style={AuthStyle.nextButton}>
                            <Text style={AuthStyle.buttonText}>비밀번호 변경</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export {FindPW};
