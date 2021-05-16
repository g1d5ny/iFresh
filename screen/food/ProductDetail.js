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
  Platform,
  Alert,
  ImageBackground,
} from "react-native";
import styled from "styled-components";
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Style } from "../../styles/user/Style";
import Modal from 'react-native-modal';
import { ModalStyle } from "../../styles/component/ModalStyle";

const ProductDetail = ({ navigation, route }) => {

  const [date, setDate] = useState(new Date());
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "rgba(36, 197, 139, 0.2)", flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 30, marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 1380,
            borderRadius: 10,
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/img_food.png')} style={{width: 300, height: 200, marginTop: 30, marginBottom: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4F5F8', borderRadius: 10}}/>
            <View style={Style.InputView}>
              <Text style={Style.title}>상품명</Text>
              <View style={Style.textInputGray}>
                <Text style={Style.content}>찌개두부</Text>
                {/*<Text style={styles.title}>{route.params.name}</Text>*/}
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>바코드번호</Text>
              <View style={Style.textInputGray}>
                <Text style={Style.content}>1234567890987</Text>
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>구매 일자</Text>
              <View style={Style.textInputGray}>
                <Text style={Style.content}>2021.05.16</Text>
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>유통기한</Text>
              <View style={{flexDirection: 'row'}}>
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  mode="date"
                />
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>범주</Text>
              <DropDownPicker
                items={[
                  {label: '농산물', value: '001', icon: () => {}},
                  {label: '해산물', value: '002', icon: () => {}},
                  {label: '육류', value: '003', icon: () => {}},
                  {label: '유제품', value: '004', icon: () => {}},
                  {label: '음료', value: '005', icon: () => {}},
                  {label: '기타', value: '006', icon: () => {}},
                ]}
                defaultValue={null}
                placeholder='범주'
                containerStyle={{height: 40, width: 300, marginTop: 10}}
                style={[{backgroundColor: '#fff', borderColor: "#DCDBE6", height: 40, borderRadius: 7}]}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setCategory(item.value)}
              />
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>단가</Text>
              <View style={Style.textInput}>
                <Text style={Style.content}>1,300</Text>
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>수량</Text>
              <View style={Style.textInput}>
                <Text style={Style.content}>3</Text>
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>합계</Text>
              <View style={Style.textInput}>
                <Text style={Style.content}>3,900</Text>
              </View>
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>보관방법</Text>
              <DropDownPicker
                items={[
                  {label: '냉장', value: '001', icon: () => {}},
                  {label: '냉동', value: '002', icon: () => {}},
                  {label: '실온', value: '003', icon: () => {}},
                ]}
                defaultValue={null}
                placeholder='보관방법'
                containerStyle={{height: 40, width: 300,
                  marginTop: 10}}
                style={[{backgroundColor: '#fff', borderColor: "#DCDBE6", height: 40, borderRadius: 7}]}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setStore(item.value)}
              />
            </View>
            <View style={Style.InputView}>
              <Text style={Style.title}>비고</Text>
              <TextInput style={Style.textInput}/>
            </View>
            <View style={{marginTop: 50, flexDirection: 'row', width: 300, justifyContent: 'space-between'}}>
              <TouchableOpacity style={Style.editButton}
                                onPress={() => toggleModal()}>
                <Text style={Style.buttonText}>상품 수정</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.deleteButton}
                                onPress={() => toggleModal2()}>
                <Text style={Style.buttonText}>상품 삭제</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Modal isVisible={modalVisible}
               useNativeDriver={true}
               hideModalContentWhileAnimating={true}
               onBackdropPress={() => modalVisible(false)}>
          <View style={ModalStyle.modalView}>
            <View style={ModalStyle.modalInView}>
              <View style={ModalStyle.modalInTextView}>
                <Text style={ModalStyle.modalText}>수정되었습니다.</Text>
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
                <Text style={ModalStyle.modalText}>삭제되었습니다.</Text>
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
  );


};

const styles = StyleSheet.create({});

export { ProductDetail };
