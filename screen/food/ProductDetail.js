import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Platform, Alert, ImageBackground, } from "react-native";
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Style } from "../../styles/user/Style";
import Modal from 'react-native-modal';
import { ModalStyle } from "../../styles/component/ModalStyle";
import { FoodStyle } from "../../styles/user/food/FoodStyle";
import { CategoryBottomModal, StorageBottomModal } from "../../component/user/Modal";
import Arrow from "../../assets/icon_black_down_arrow.svg";

const ProductDetail = ({ navigation, route }) => {

  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState('채소');
  const [storageValue, setStorageValue] = useState('냉장');
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [storageVisible, setStorageVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2);
  };

  return (
    <SafeAreaView style={FoodStyle.background}>
      <ScrollView>
        <View style={{ marginTop: 30, marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 1380,
            borderRadius: 10,
            alignItems: 'center'
          }}>
            <Image source={route.params.data.image} style={{width: 300, height: 200, marginTop: 30, marginBottom: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4F5F8', borderRadius: 10}}/>
            <View style={Style.InputView}>
              <Text style={Style.title}>상품명</Text>
              <View style={Style.textInputGray}>
                <Text style={Style.content}>{route.params.data.name}</Text>
                {/*<Text style={styles.title}>{route.params.data.name}</Text>*/}
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
              <TouchableOpacity style={{width: 300,
                height: 40,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#DCDBE6",
                marginTop: 10,
                padding: 10,}} onPress={() => setCategoryVisible(true)}>
                <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 12, fontFamily: "tway_air",}}>{value}</Text>
                  <Arrow />
                </View>
              </TouchableOpacity>
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
              <TouchableOpacity style={{
                width: 300,
                height: 40,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#DCDBE6",
                marginTop: 10,
                padding: 10,
              }} onPress={() => setStorageVisible(true)}>
                <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 12, fontFamily: "tway_air",}}>{storageValue}</Text>
                  <Arrow />
                </View>
              </TouchableOpacity>
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
        <CategoryBottomModal isVisible={categoryVisible} setIsVisible={setCategoryVisible} value={value} setValue={setValue}/>
        <StorageBottomModal isVisible={storageVisible} setIsVisible={setStorageVisible} value={storageValue} setValue={setStorageValue}/>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export { ProductDetail };
