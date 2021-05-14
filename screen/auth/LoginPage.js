import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
    Alert, ImageBackground,
} from 'react-native';
import {
    KakaoOAuthToken,
    KakaoProfile,
    getProfile as getKakaoProfile,
    login,
    logout,
    unlink,
} from '@react-native-seoul/kakao-login';

const LoginPage = ({navigation}) => {

    const [result, setResult] = useState('');

    const signInWithKakao = async() => {
        const token = await login();

        setResult(JSON.stringify(token));
    };

    const signOutWithKakao = async () => {
        const message = await logout();

        setResult(message);
    };

    const getProfile = async () => {
        const profile = await getKakaoProfile();

        setResult(JSON.stringify(profile));
    };

    const unlinkKakao = async (): Promise<void> => {
        const message = await unlink();

        setResult(message);
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ImageBackground source={require('../../assets/img_login_background.png')}
                             style={{width: '100%', height: '100%'}} resizeMode='stretch'>
                <View style={{height: '100%'}}>
                    <View style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{color: "#fff", fontSize: 28, fontWeight: 'bold', marginTop: 10}}>Welcome To i-Fresh!</Text>
                        <Text style={{color: "#fff", fontSize: 15, fontWeight: 'bold', marginTop: 10}}>식재료의 신선도와 레시피 확인을
                            한번에!</Text>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 60}}>
                        <Image source={require('../../assets/img_login.png')}
                               style={{width: 150, height: 150}}/>
                        <Text style={{color: "#24C58B", fontSize: 22, fontWeight: 'bold'}}>i-Fresh</Text>
                    </View>
                    <View style={{marginLeft: 50, marginTop: 40}}>
                        <Text style={{fontSize: 12}}>SNS로 로그인</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => signInWithKakao()}>
                                <Image source={require('../../assets/icon_kakao.png')}
                                   style={{width: 65, height: 65, marginTop: 10}} />
                            </TouchableOpacity>
                            <Image source={require('../../assets/icon_naver.png')}
                                   style={{width: 65, height: 65, marginTop: 10, marginLeft: 20}}/>
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        marginTop: 30,
                    }}>
                        <TouchableOpacity style={styles.greenButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={{color: "#fff", fontWeight: 'bold'}}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.greenButton}>
                            <Text style={{color: "#fff", fontWeight: 'bold'}}>회원가입</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.whiteButton}>
                            <Text style={{color: "#2d2d2d", fontWeight: 'bold'}}>아이디 찾기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.whiteButton}>
                            <Text style={{color: "#2d2d2d", fontWeight: 'bold'}}>비밀번호 찾기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'flex-end'}}>
                        <Text style={{alignSelf: 'center', fontSize: 10}}>Copyright HYWU i-Fresh 2021.</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    whiteButton: {
        width: 300,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom : 20,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderColor: '#DCDBE6',
        borderWidth: 1
    },
    greenButton: {
        width: 300,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom : 20,
        borderRadius: 5,
        backgroundColor: "#24C58B"
    }
});

export {LoginPage};
