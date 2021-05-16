import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import {AuthStyle} from "../../../styles/auth/AuthStyle";
import Modal from "react-native-modal";
import { ModalStyle } from "../../../styles/component/ModalStyle";

const SearchPW = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2);
    };

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
                            <TouchableOpacity style={AuthStyle.mediumButton}
                                              onPress={() => toggleModal()}>
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
                                <TouchableOpacity style={AuthStyle.mediumButton}
                                                  onPress={() => toggleModal2()}>
                                    <Text style={AuthStyle.buttonText}>인증</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 150}}>
                        <TouchableOpacity style={AuthStyle.nextButton}
                        onPress={() => navigation.navigate('ChangePW')}>
                            <Text style={AuthStyle.buttonText}>비밀번호 변경</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal isVisible={modalVisible}
                       useNativeDriver={true}
                       hideModalContentWhileAnimating={true}
                       onBackdropPress={() => modalVisible(false)}>
                    <View style={ModalStyle.modalView}>
                        <View style={ModalStyle.modalInView}>
                            <View style={ModalStyle.modalInTextView}>
                                <Text style={ModalStyle.modalText}>이메일이 발송되었습니다.</Text>
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

                <Modal isVisible={modalVisible2}
                       useNativeDriver={true}
                       hideModalContentWhileAnimating={true}
                       onBackdropPress={() => modalVisible2(false)}>
                    <View style={ModalStyle.modalView}>
                        <View style={ModalStyle.modalInView}>
                            <View style={ModalStyle.modalInTextView}>
                                <Text style={ModalStyle.modalText}>인증되었습니다.</Text>
                            </View>
                            <View style={ModalStyle.modalTouchView}>
                                <TouchableOpacity
                                  style={ModalStyle.modalTouch}
                                  onPress={() => {
                                      setModalVisible2(!modalVisible2);
                                  }}
                                >
                                    <Text style={ModalStyle.modalTouchText}>확인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </SafeAreaView>
    )
}

export {SearchPW};
