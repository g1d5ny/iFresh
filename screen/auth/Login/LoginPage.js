import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
  ImageBackground,
} from "react-native";
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from "@react-native-seoul/kakao-login";
import { Style } from "../../../styles/user/Style";
import { AuthStyle } from "../../../styles/auth/AuthStyle";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";

const iosKeys = {
  kConsumerKey: "BxH4kkEoXxN2DbBBAR6X",
  kConsumerSecret: "83HMmGj5Nu",
  kServiceAppName: "테스트앱(iOS)",
  kServiceAppUrlScheme: "freshLogin", // only for iOS
};

const androidKeys = {
  kConsumerKey: "BxH4kkEoXxN2DbBBAR6X",
  kConsumerSecret: "83HMmGj5Nu",
  kServiceAppName: "테스트앱(안드로이드)",
};

const initials = Platform.OS === "ios" ? iosKeys : androidKeys;

const LoginPage = ({ navigation, route }) => {

  useEffect(() => {
    naverLogout();
  })

  const [result, setResult] = useState("");

  const getKProfile = async () => {
    const profile = await getKakaoProfile();
    setResult(JSON.stringify(profile));
    console.log(result);
  };

  const signInWithKakao = async () => {
    const token = await login();
    setResult(JSON.stringify(token));
    console.log(result);
    navigation.navigate("TabNavigation");
    getKProfile();
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
  };



  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  const [naverToken, setNaverToken] = useState(null);

  const naverLogin = props => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        // console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        console.log(token);
        setNaverToken(token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
        navigation.navigate("TabNavigation");
      });
    });
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === "024") {
      Alert.alert("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <ImageBackground source={require("../../../assets/img_login_background.png")}
                         style={{ width: "100%", height: "100%" }} resizeMode="stretch">
          <View style={{ height: "100%" }}>
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <Text style={{ color: "#fff", fontSize: 28, marginTop: 10, fontFamily: "tway_air" }}>Welcome
                To i-Fresh!</Text>
              <Text style={{ color: "#fff", fontSize: 15, marginTop: 10, fontFamily: "tway_air" }}>식재료의
                신선도와 레시피 확인을
                한번에!</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 100 }}>
              <Text
                style={{ color: "#24C58B", fontSize: 22, fontFamily: "tway_air" }}>i-Fresh</Text>
            </View>
            <View style={{
              width: 300,
              alignSelf: "center",
              alignItems: "flex-start",
              marginTop: 50,
            }}>
              <Text style={{ fontFamily: "tway_air", fontSize: 15 }}>LOGIN</Text>
              <TextInput style={AuthStyle.input} placeholder={"E-mail"} />
              <TextInput style={AuthStyle.input} placeholder={"PASSWORD"} secureTextEntry={true}/>
              <TouchableOpacity style={{
                width: 300,
                height: 40,
                borderRadius: 7,
                backgroundColor: "#24C58B",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }} onPress={() => navigation.navigate("TabNavigation")}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air", color: "#fff" }}>로그인</Text>
              </TouchableOpacity>
              <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SearchID1")}><Text
                  style={{ fontFamily: "tway_air", fontSize: 14, color: "#2097F6" }}>아이디 찾기</Text></TouchableOpacity>
                <Text style={{ fontFamily: "tway_air", fontSize: 14, color: "#2097F6" }}> | </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SearchPW")}><Text
                  style={{ fontFamily: "tway_air", fontSize: 14, color: "#2097F6" }}>비밀번호 찾기</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{
              width: 300,
              alignSelf: "center",
              alignItems: "flex-start",
              marginTop: 50,
              // backgroundColor: "pink",
            }}>
              <Text style={{ fontFamily: "tway_air", fontSize: 15 }}>SNS LOGIN</Text>
              <TouchableOpacity style={{
                width: 300,
                height: 40,
                borderRadius: 7,
                backgroundColor: "#FEDE00",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }} onPress={() => signInWithKakao()}>
                <Image source={require("../../../assets/icon_kakao.png")} style={{ width: 40, height: 40 }} />
                <Text style={{ color: "#3C1E1C", fontFamily: "tway_air", fontSize: 14 }}>카카오톡으로 로그인</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: 300,
                height: 40,
                borderRadius: 7,
                backgroundColor: "#1DC800",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }} onPress={() => naverLogin(initials)}>
                <Image source={require("../../../assets/icon_naver.png")} style={{ width: 40, height: 40 }} />
                <Text style={{ color: "#fff", fontFamily: "tway_air", fontSize: 14 }}>네이버로 로그인</Text>
              </TouchableOpacity>
              <View style={{ marginTop: 40, alignSelf: "center", flexDirection: "row" }}>
                <Text style={{ color: "#2d2d2d", fontFamily: "tway_air", fontSize: 14 }}>i-Fresh의 회원이 아니신가요?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={{ color: "#2097F6", fontFamily: "tway_air", fontSize: 14, marginLeft: 10 }}>회원가입</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 50 }}>
              <Text style={{ alignSelf: "center", fontSize: 10, fontFamily: "tway_air" }}>Copyright HYWU i-Fresh
                2021.</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export { LoginPage };
