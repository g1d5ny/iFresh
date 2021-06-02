import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import Modal from "react-native-modal";
import { Style } from "../../styles/user/Style";
import { ModalStyle } from "../../styles/component/ModalStyle";

const Withdrawal = ({ navigation }) => {

  const [check, setCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  console.log(check);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View>
          <View style={{ margin: 20 }}>
            <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>[회원 탈퇴 약관]</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{
              width: "95%",
              backgroundColor: "rgba(36, 197, 139, 0.2)",
              borderRadius: 7,
              padding: 10,
              paddingBottom: 20,
            }}>
              <Text style={{ fontFamily: "tway_air", fontSize: 13, marginTop: 10 }}>1. 회원탈퇴 신청 전 다음 사항을 확인 해 주세요.</Text>
              <Text style={{ fontFamily: "tway_air", fontSize: 13, marginTop: 10 }}>2. 회원탈퇴를 신청하시면 현재 로그인 된 아이디는 사용하실 수 없습니다.</Text>
              <Text style={{ fontFamily: "tway_air", fontSize: 13, marginTop: 10 }}>3. 회원 탈퇴 시, 다음 내용은 영구 삭제 되며 복구 할 수 없습니다.</Text>
              <Text style={{ fontFamily: "tway_air", fontSize: 13, marginTop: 10, marginLeft: 10 }}>- 회원 정보 (이름, 이메일, 연락처)</Text>
              <Text style={{ fontFamily: "tway_air", fontSize: 13, marginTop: 10, marginLeft: 10 }}>- 업로드한 상품</Text>
              <Text style={{ fontFamily: "tway_air", fontSize: 13, marginTop: 10, marginLeft: 10 }}>- 레시피 작성에 관한 기록</Text>
            </View>
          </View>
          <View style={{ padding: 10, flexDirection: "row", alignItems: "center", marginTop: 100, marginBottom: 100 }}>
            {
              check === false ? (
                <TouchableOpacity
                  style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 7, borderColor: "#DCDBE6" }}
                  onPress={() => setCheck(prev => !prev)} />
              ) : (
                <TouchableOpacity
                  style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 7, borderColor: "#DCDBE6" }}
                  onPress={() => setCheck(prev => !prev)}>
                  <Image source={require("../../assets/icon_check.png")} style={{ width: "100%", height: "100%" }} />
                </TouchableOpacity>
              )
            }
            <Text style={{ marginLeft: 10, fontFamily: "tway_air", fontSize: 13 }}>위 사실을 확인하였습니다.</Text>
          </View>
          <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity style={Style.button}
                              onPress={() => {
                                check === true ?
                                toggleModal() : Alert.alert('회원 탈퇴 약관에 동의해주세요.')
                              }}>
              <Text style={Style.buttonText}>탈퇴하기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal isVisible={modalVisible}
               useNativeDriver={true}
               hideModalContentWhileAnimating={true}
               onBackdropPress={() => modalVisible(false)}>
          <View style={{
            padding: 12,
            width: "100%",
            height: 280,
            backgroundColor: "#fff",
          }}>
            <View style={{ justifyContent: "space-between", flex: 1 }}>
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Text style={{ fontSize: 24, color: "#24C58B", fontFamily: "tway_air" }}>회원 탈퇴</Text>
              </View>
              <View style={{ flex: 2, justifyContent: "flex-start" }}>
                <Text style={{ marginTop: 24, fontFamily: "tway_air" }}>비밀번호를 입력해 주세요.</Text>
                <View style={{
                  height: 40, borderRadius: 5, justifyContent: "center", paddingLeft: 8, paddingRight: 8,
                  borderColor: "#DFE3E7", borderWidth: 1, marginTop: 8,
                }}>
                  <TextInput
                    placeholder={"비밀번호"}
                    placeholderTextColor={"#DFE3E7"}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <TouchableOpacity style={{
                    width: 68, borderWidth: 1, borderColor: "#24C58B", paddingTop: 12, paddingBottom: 12
                    , justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: "#24C58B",
                  }} onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("LoginPage");
                  }}>
                    <Text style={{ color: "#fff", fontFamily: "tway_air" }}>확인</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    width: 68, borderWidth: 1, borderColor: "#DFE3E7", marginLeft: 24, paddingTop: 12, paddingBottom: 12
                    , justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: "#DFE3E7",
                  }} onPress={() => setModalVisible(false)}>
                    <Text style={{ fontFamily: "tway_air" }}>취소</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Withdrawal;
