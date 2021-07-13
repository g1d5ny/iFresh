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
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
} from "react-native";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Style } from "../../styles/user/Style";
import { FoodStyle } from "../../styles/user/food/FoodStyle";

const ProductAdd = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [store, setStore] = useState("");
  const [category, setCategory] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "농산물" },
    { label: "해산물" },
    { label: "육류" },
    { label: "유제품" },
    { label: "음료" },
    { label: "기타" },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "냉장" },
    { label: "냉동" },
    { label: "실온" },
  ]);


  return (
    <SafeAreaView style={FoodStyle.background}>
      <ScrollView keyboardShouldPersistTaps={"always"}>
        <KeyboardAwareScrollView>
          <View style={{ marginTop: 30, marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
            <View style={{
              backgroundColor: "#fff",
              width: "90%",
              // height: 1380,
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
                <View style={{
                  width: 300,
                  height: 40,
                  marginBottom: 20,
                }}>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    onChangeItem={items => setItems(items.value)}
                    setItems={setItems}
                    style={{
                      width: 300,
                      height: 40,
                      borderRadius: 7,
                      borderWidth: 1,
                      borderColor: "#DCDBE6",
                      marginTop: 10,
                    }}
                    defaultValue={null}
                    placeholder="범주"
                    itemStyle={{
                      justifyContent: "flex-start",
                    }}
                    dropDownStyle={{ backgroundColor: "#DCDBE6" }}
                    // containerStyle={{height: 40, width: 300,
                    //   marginTop: 10,}}
                    // style={[{backgroundColor: '#fff'}]}
                  />
                </View>
                {/*<DropDownPicker*/}
                {/*  items={[*/}
                {/*    {label: '농산물', value: '001', icon: () => {}},*/}
                {/*    {label: '해산물', value: '002', icon: () => {}},*/}
                {/*    {label: '육류', value: '003', icon: () => {}},*/}
                {/*    {label: '유제품', value: '004', icon: () => {}},*/}
                {/*    {label: '음료', value: '005', icon: () => {}},*/}
                {/*    {label: '기타', value: '006', icon: () => {}},*/}
                {/*  ]}*/}
                {/*  defaultValue={null}*/}
                {/*  placeholder='범주'*/}
                {/*  containerStyle={{height: 40, width: 300, marginTop: 10}}*/}
                {/*  style={[{backgroundColor: '#fff', borderColor: "#DCDBE6", height: 40, borderRadius: 7}]}*/}
                {/*  itemStyle={{*/}
                {/*    justifyContent: 'flex-start'*/}
                {/*  }}*/}
                {/*  dropDownStyle={{backgroundColor: '#fafafa'}}*/}
                {/*  onChangeItem={item => setCategory(item.value)}*/}
                {/*/>*/}
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>단가</Text>
                <TextInput style={styles.textInput} />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>수량</Text>
                <TextInput style={styles.textInput} />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>합계</Text>
                <TextInput style={styles.textInput} />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>보관방법</Text>
                <View style={{
                  width: 300,
                  height: 40,
                  marginBottom: 20,
                }}>
                  <DropDownPicker
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    onChangeItem={items2 => setItems2(item.value)}
                    setItems2={setItems2}
                    style={{
                      width: 300,
                      height: 40,
                      borderRadius: 7,
                      borderWidth: 1,
                      borderColor: "#DCDBE6",
                      marginTop: 10,
                    }}
                    defaultValue={null}
                    placeholder="범주"
                    itemStyle={{
                      justifyContent: "flex-start",
                    }}
                    dropDownStyle={{ backgroundColor: "#DCDBE6" }}
                    // containerStyle={{height: 40, width: 300,
                    //   marginTop: 10,}}
                    // style={[{backgroundColor: '#fff'}]}
                  />
                </View>
              </View>
              <View style={styles.InputView}>
                <Text style={styles.title}>비고</Text>
                <TextInput style={styles.textInput} />
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
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({
  InputView: {
    marginTop: 20,
    alignSelf: "center",
  },
  textInput: {
    width: 300,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DCDBE6",
    marginTop: 10,
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
