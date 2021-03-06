import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { MyStyle } from "../../styles/user/my/MyStyle";
import { Style } from "../../styles/user/Style";
import { ImageSlider } from "../../component/ItemComponent";
import { screenWidth } from "../../styles/DimenStyle";

const MyEdit = ({ navigation }) => {

  const [phone, setPhone] = useState(false);
  const [pw, setPw] = useState(false);
  console.log("pw: " + pw);
  console.log("phone: " + phone);
  return (
    <SafeAreaView style={Style.background}>
      {/*<ScrollView>*/}
        <View style={{flex:1}}>
          <View style={MyStyle.box}>
            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 20, fontFamily: "tway_air" }}>사용자 정보</Text>
              <View style={{ borderWidth: 1, borderColor: "#C4C4C4", marginTop: 20, marginBottom: 20 }} />
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "tway_air", fontSize: 15, color: "#C4C4C4" }}>이메일</Text>
                <View style={styles.textInputGray}>
                  <Text>jiwon936626@gmail.com</Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", marginTop: 20, justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "tway_air", fontSize: 15, color: "#C4C4C4" }}>연락처</Text>
                <View style={{ width: 280, flexDirection: "row", justifyContent: "space-between" }}>
                  {
                    phone === false ? (
                      <>
                        <Text style={{ fontFamily: "tway_air", fontSize: 15 }}>010-1234-5678</Text>
                        <TouchableOpacity onPress={() => setPhone(prev => !prev)}>
                          <Image source={require("../../assets/icon_edit.png")} style={{ width: 15, height: 15 }} />
                        </TouchableOpacity>
                      </>
                    ) : (
                      <>
                        <TextInput style={{
                          borderRadius: 7,
                          borderWidth: 1,
                          borderColor: "#DCDBE6",
                          height: 35,
                          width: 150,
                          alignItems: "center",
                          paddingLeft: 10,
                        }}>
                          <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>010-1234-5678</Text>
                        </TextInput>
                        <TouchableOpacity style={{
                          width: 60,
                          height: 35,
                          borderWidth: 1,
                          borderColor: "#24C58B",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                                          onPress={() => setPhone(prev => !prev)}>
                          <Text style={{ fontFamily: "tway_air", fontSize: 14, color: "#24C58B" }}>저장</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                          width: 60,
                          height: 35,
                          borderWidth: 1,
                          borderColor: "#2097F6",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                                          onPress={() => setPhone(prev => !prev)}>
                          <Text style={{ fontFamily: "tway_air", fontSize: 14, color: "#2097F6" }}>취소</Text>
                        </TouchableOpacity>
                      </>
                    )
                  }
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", marginTop: 20, justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "tway_air", fontSize: 15, color: "#C4C4C4" }}>비밀번호</Text>
                <View style={{ width: 280, flexDirection: "row", justifyContent: "space-between" }}>
                  {
                    pw === false ? (
                      <>
                        <Text style={{ fontFamily: "tway_air", fontSize: 15 }}>********</Text>
                        <TouchableOpacity onPress={() => setPw(prev => !prev)}>
                          <Image source={require("../../assets/icon_edit.png")} style={{ width: 15, height: 15 }} />
                        </TouchableOpacity>
                      </>
                    ) : (
                      <View>
                        <TextInput
                          style={{
                            width: 270,
                            borderBottomWidth: 1,
                            borderColor: "#C4C4C4",
                            paddingBottom: 5,
                            marginBottom: 10,
                          }}
                          placeholder={"현재 비밀번호"} />
                        <TextInput
                          style={{
                            width: 270,
                            borderBottomWidth: 1,
                            borderColor: "#C4C4C4",
                            paddingBottom: 5,
                            marginBottom: 10,
                          }}
                          placeholder={"새 비밀번호"} />
                        <TextInput
                          style={{
                            width: 270,
                            borderBottomWidth: 1,
                            borderColor: "#C4C4C4",
                            paddingBottom: 5,
                            marginBottom: 10,
                          }}
                          placeholder={"새 비밀번호 확인"} />
                        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                          <TouchableOpacity style={{
                            width: 60,
                            height: 35,
                            borderWidth: 1,
                            borderColor: "#24C58B",
                            borderRadius: 7,
                            alignItems: "center",
                            justifyContent: "center",
                          }} onPress={() => setPw(prev => !prev)}>
                            <Text style={{ fontFamily: "tway_air", fontSize: 14, color: "#24C58B" }}>저장</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            width: 60,
                            height: 35,
                            borderWidth: 1,
                            borderColor: "#2097F6",
                            borderRadius: 7,
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: 5
                          }} onPress={() => setPw(prev => !prev)}>
                            <Text style={{ fontFamily: "tway_air", fontSize: 14, color: "#2097F6" }}>취소</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )
                  }
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={MyStyle.logoutView} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={MyStyle.logoutText}>로그아웃</Text>
        </TouchableOpacity>
        <View style={MyStyle.advertise}>
          <ImageSlider data={[
            {id: 0, image: require('../../assets/img_advertise.png')},
            {id: 1, image: require('../../assets/img_advertise2.jpeg')},
            {id: 2, image: require('../../assets/img_advertise3.jpeg')},
          ]} width={screenWidth} height={220}/>
          {/*<Image source={require('../../assets/img_advertise.png')} style={{width: '100%', height: 100}}/>*/}
        </View>
      {/*</ScrollView>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInputGray: {
    width: 280,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#F4F5F8",
    paddingLeft: 10,
    justifyContent: "center",
  },
});
export default MyEdit;
