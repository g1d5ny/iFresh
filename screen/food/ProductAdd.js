import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert, ImageBackground, } from "react-native";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Style } from "../../styles/user/Style";
import { FoodStyle } from "../../styles/user/food/FoodStyle";
import Arrow from "../../assets/icon_black_down_arrow.svg";
import { CategoryBottomModal, StorageBottomModal } from "../../component/user/Modal";

const ProductAdd = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState('채소');
  const [storageValue, setStorageValue] = useState('냉장');
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [storageVisible, setStorageVisible] = useState(false);

  const CategoryFunction = (value) => {
    switch (value) {
      case '과일·견과·쌀':
        return '과일·견과·쌀';
      case '수산·해산·건어물' :
        return '수산·해산·건어물';
      case '정육·계란' :
        return '정육·계란';
      case '간편식' :
        return '간편식';
      case '면·양념·오일' :
        return '면·양념·오일';
      case '생수·음료·우유·커피' :
        return '생수·음료·우유·커피';
      case '간식' :
        return '간식';
      case '베이커리·치즈·델리' :
        return '베이커리·치즈·델리';
      default:
        return '채소';
    }
  }


  return (
    <SafeAreaView style={FoodStyle.background}>
      <ScrollView keyboardShouldPersistTaps={"always"}>
        <KeyboardAwareScrollView>
          <View style={{ marginTop: 30, marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
            <View style={{
              backgroundColor: "#fff",
              width: "90%",
              paddingBottom: 30,
              borderRadius: 10,
              alignItems: "center",
            }}>
              <View style={{
                width: 300,
                height: 200,
                marginTop: 30,
                marginBottom: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F4F5F8",
                borderRadius: 10,
              }}>
                <Image source={require("../../assets/icon_empty.png")} />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>상품명</Text>
                <View style={styles.textInputGray} />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>바코드번호</Text>
                <View style={styles.textInputGray} />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>구매 일자</Text>
                <View style={{ flexDirection: "row" }}>
                  <DatePicker
                    date={date}
                    onDateChange={setDate}
                    mode="date"
                  />
                </View>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>유통기한</Text>
                <View style={{ flexDirection: "row" }}>
                  <DatePicker
                    date={date}
                    onDateChange={setDate}
                    mode="date"
                  />
                </View>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>범주</Text>
                <TouchableOpacity style={styles.TextInputView} onPress={() => setCategoryVisible(true)}>
                  <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, fontFamily: "tway_air",}}>{value}</Text>
                    <Arrow />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>단가</Text>
                <View style={styles.TextInputView}>
                  <TextInput />
                </View>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>수량</Text>
                <View style={styles.TextInputView}>
                  <TextInput />
                </View>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>합계</Text>
                <View style={styles.TextInputView}>
                  <TextInput />
                </View>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>보관방법</Text>
                <TouchableOpacity style={styles.TextInputView} onPress={() => setStorageVisible(true)}>
                  <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, fontFamily: "tway_air",}}>{storageValue}</Text>
                    <Arrow />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>비고</Text>
                <View style={styles.TextInputView}>
                  <TextInput />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity style={Style.button}
                                onPress={() => navigation.navigate("ProductList")}>
                <Text style={Style.buttonText}>식품 업로드</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <CategoryBottomModal isVisible={categoryVisible} setIsVisible={setCategoryVisible} value={value} setValue={setValue}/>
      <StorageBottomModal isVisible={storageVisible} setIsVisible={setStorageVisible} value={storageValue} setValue={setStorageValue}/>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({
  InputView: {
    marginTop: 20,
    alignSelf: "center",
  },
  TextInputView: {
    width: 300,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DCDBE6",
    marginTop: 10,
    padding: 10,
  },
  textInputGray: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#F4F5F8",
    marginTop: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: "tway_air",
    // fontWeight: "bold",
  },
});

export { ProductAdd };
