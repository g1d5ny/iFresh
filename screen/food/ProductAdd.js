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
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Style } from "../../styles/user/Style";

const ProductAdd = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('');

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
            <View style={{width: 300, height: 200, marginTop: 30, marginBottom: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4F5F8', borderRadius: 10}}>
              <Image source={require('../../assets/icon_empty.png')}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>상품명</Text>
              <View style={styles.textInputGray}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>바코드번호</Text>
              <View style={styles.textInputGray}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>구매 일자</Text>
              <View style={styles.textInputGray}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>유통기한</Text>
              <View style={{flexDirection: 'row'}}>
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  mode="date"
                />
              </View>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>범주</Text>
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
            <View style={styles.InputView}>
              <Text style={styles.title}>단가</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>수량</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>합계</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.InputView}>
              <Text style={styles.title}>보관방법</Text>
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
            <View style={styles.InputView}>
              <Text style={styles.title}>비고</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={{marginTop: 50}}>
              <TouchableOpacity style={Style.button}
              onPress={() => navigation.navigate('ProductList')}>
                <Text style={Style.buttonText}>상품 업로드</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({
  InputView: {
    marginTop: 20,
    alignSelf: 'center'
  },
  textInput: {
    width: 300,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DCDBE6",
    marginTop: 10
  },
  textInputGray: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#F4F5F8",
    marginTop: 10
  },
  title: {
    fontSize: 13,
    fontFamily: 'tway_air',
    fontWeight: 'bold'
  }
});

export { ProductAdd };
