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
import { AuthStyle } from "../../styles/auth/AuthStyle";
import Modal from "react-native-modal";

const Register = ({ navigation }) => {

  // const [modalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //     setModalVisible(!modalVisible);
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <View style={{ marginTop: 70, alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>회원가입</Text>
          <Text style={{ marginTop: 15, fontSize: 14, color: "#CCCED6" }}>i-Fresh의 회원 가입 정보를 입력해 주세요.</Text>
        </View>
        <View style={{ marginTop: 50, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>이름</Text>
          <TextInput
            placeholder={"이름"}
            style={AuthStyle.input}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>연락처</Text>
          <TextInput
            placeholder={"연락처"}
            style={AuthStyle.input}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>ID(E-mail)</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder={"ID(E-mail)"}
              style={AuthStyle.shortInput}
            />
            <TouchableOpacity style={AuthStyle.shortButton}>
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
            placeholder={"비밀번호"}
            style={AuthStyle.input}
          />
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Text style={AuthStyle.list}>비밀번호 확인</Text>
          <TextInput
            placeholder={"비밀번호 확인"}
            style={AuthStyle.input}
          />
        </View>
        <TouchableOpacity style={AuthStyle.nextButton}
                          onPress={() => navigation.navigate('Login')}>
          <Text style={AuthStyle.buttonText}>다음</Text>
        </TouchableOpacity>

        {/*<Modal isVisible={modalVisible}*/}
        {/*       useNativeDriver={true}*/}
        {/*       hideModalContentWhileAnimating={true}*/}
        {/*       // onBackdropPress={() => setModalVisible(false)}*/}
        {/*>*/}
        {/*    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>*/}
        {/*        <View style={{*/}
        {/*            width: 300,*/}
        {/*            height: 200,*/}
        {/*            backgroundColor: "#fff",*/}
        {/*            padding: 12,*/}
        {/*            justifyContent: 'center'*/}
        {/*        }}>*/}
        {/*            <View style={{flex:1, justifyContent: 'center'}}>*/}
        {/*                <Text style={{*/}
        {/*                    fontSize: 18,*/}
        {/*                    fontWeight: 'bold',*/}
        {/*                    textAlign: "center"*/}
        {/*                }}>인증되었습니다.</Text>*/}
        {/*            </View>*/}
        {/*            <View style={{alignItems: 'flex-end', justifyContent: 'flex-end',}}>*/}
        {/*                <TouchableOpacity*/}
        {/*                    style={{*/}
        {/*                        width: 60,*/}
        {/*                        height: 33,*/}
        {/*                        backgroundColor: '#7E5FF9',*/}
        {/*                        borderRadius: 5,*/}
        {/*                        alignItems: 'center',*/}
        {/*                        justifyContent: 'center'*/}
        {/*                    }}*/}
        {/*                    onPress={() =>*/}
        {/*                        setModalVisible(false)*/}
        {/*                    }>*/}
        {/*                    <Text style={{*/}
        {/*                        color: '#fff',*/}
        {/*                        fontSize: 12,*/}
        {/*                        fontWeight: 'bold',*/}
        {/*                    }}>확인</Text>*/}
        {/*                </TouchableOpacity>*/}
        {/*            </View>*/}
        {/*        </View>*/}
        {/*    </View>*/}
        {/*</Modal>*/}
      </View>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({});

export { Register };
