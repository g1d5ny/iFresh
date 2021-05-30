import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import { AuthStyle } from "../../../styles/auth/AuthStyle";
import Modal from "react-native-modal";
import { ModalStyle } from "../../../styles/component/ModalStyle";
import useInput from "../../../hooks/useInput";

const XMLRequestFunction = async (body, url, setData, setLoading) => {
  setLoading(true);
  try {
    return new Promise(function(resolve, reject) {
      const xobj = new XMLHttpRequest();
      xobj.open('POST', url , true);
      xobj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');
      xobj.onreadystatechange = function () {
        if (xobj.readyState !== 4) {
          return;
        }
        if (xobj.status === 200) {
          console.log('success', xobj.response);
          const jsonResponse = JSON.parse(xobj.response);
          if(jsonResponse.state === 'true') {
            setData(jsonResponse.providerInfo);
          } else if(jsonResponse.state === 'false') {
            Alert.alert(jsonResponse.data);
          } else {
            // error
            Alert.alert(jsonResponse.data);
          }
          setLoading(false);
          resolve(jsonResponse.state)
        } else {
          Alert.alert('server error' + xobj.status);
          console.warn('server error');
          setLoading(false);
        }
      };
      xobj.send(body);
    })
  } catch (e) {
    Alert.alert(e.message);
    setLoading(false);
  }
};

const Register = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
      setModalVisible(!modalVisible);
  };
  const [apple, setApple] = useState();
  const [loading, setLoading] = useState(false);
  const emailInput = useInput("");
  const pwdInput = useInput("");
  const phoneNumInput = useInput("");
  const nameInput = useInput("");


  const XML = async () => {
    XMLRequestFunction('Email='+emailInput.value+"&Pwd="+pwdInput.value, "http://797c916bef4d.ngrok.io/Register.php", setApple, setLoading)
      .then(state => {
        if(state === 'true') {
          console.log("state",state);
          navigation.navigate("LoginPage");
        }
      })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <View style={{ marginTop: 70, alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: 'tway_air' }}>회원가입</Text>
          <Text style={{ marginTop: 15, fontSize: 14, color: "#CCCED6", fontFamily: 'tway_air' }}>i-Fresh의 회원 가입 정보를 입력해 주세요.</Text>
        </View>
        <View style={{ marginTop: 50, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>이름</Text>
          <TextInput
            onChangeText={nameInput.onChange}
            value={nameInput.value}
            {...nameInput}
            placeholder={"이름"}
            style={AuthStyle.input}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>연락처</Text>
          <TextInput
            onChangeText={phoneNumInput.onChange}
            value={phoneNumInput.value}
            {...phoneNumInput}
            placeholder={"연락처"}
            style={AuthStyle.input}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>ID(E-mail)</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              onChangeText={emailInput.onChange}
              value={emailInput.value}
              {...emailInput}
              placeholder={"ID(E-mail)"}
              style={AuthStyle.shortInput}
            />
            <TouchableOpacity style={AuthStyle.shortButton}
            onPress={() => toggleModal()}>
              <Text style={AuthStyle.buttonText}>인증</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>인증번호</Text>
          <TextInput
            placeholder={"인증번호"}
            style={AuthStyle.input}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>비밀번호</Text>
          <TextInput
            onChangeText={pwdInput.onChange}
            value={pwdInput.value}
            {...pwdInput}
            placeholder={"비밀번호"}
            style={AuthStyle.input}
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>비밀번호 확인</Text>
          <TextInput
            placeholder={"비밀번호 확인"}
            style={AuthStyle.input}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={AuthStyle.nextButton}
                          onPress={() => XML()}>
          <Text style={AuthStyle.buttonText}>다음</Text>
        </TouchableOpacity>

        <Modal isVisible={modalVisible}
               useNativeDriver={true}
               hideModalContentWhileAnimating={true}
               onBackdropPress={() => modalVisible(false)}>
          <View style={ModalStyle.modalView}>
            <View style={ModalStyle.modalInView}>
              <View style={ModalStyle.modalInTextView}>
                <Text style={ModalStyle.modalText}>인증되었습니다.</Text>
              </View>
              <View style={ModalStyle.modalTouchView}>
                <TouchableOpacity
                  style={ModalStyle.modalTouch}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={ModalStyle.modalTouchText}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({});

export { Register };
