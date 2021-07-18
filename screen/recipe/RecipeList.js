import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import RecipeListForm from "../../component/user/recipe/RecipeListForm";
import { ProductListForm } from "../../component/user/food/ProductListForm";
import Arrow from "../../assets/icon_black_down_arrow.svg";
import { SortSearchBottomSelector } from "../../component/user/Modal";

const RecipeList = ({ navigation }) => {

  const DATA = [
    {
      id: 2,
      photo: require("../../assets/img_shabu.png"),
      name: "샤브샤브",
      author: "sung_ge",
      time: "20",
      like: 10,
      amount: 2,
    },
    {
      id: 1,
      photo: require("../../assets/img_pasta.png"),
      name: "까르보나라 파스타",
      author: "g1d5ny",
      time: "15",
      like: 13,
      amount: 4,
      // ingredientName: ["김치", "돼지고기", "양파", "밥", "설탕", "간장", "참기름", "식용유", "쪽파", "계란후라이"],
      // ingredientAmount: ["450g", "200g", "1/2개", "4그릇", "1/2 큰 술", "1 작은 술", "1 큰 술", "2 큰 술", "3개", "4개"]
    },
    {
      id: 3,
      photo: require("../../assets/img_kimchi.png"),
      name: "김치 볶음밥",
      author: "daff",
      amount: 4,
      time: "10",
      like: 5,
      ingredient: [{ id: 0, name: "김치", amount: "450g" },
        { id: 1, name: "돼지고기", amount: "200g" },
        { id: 2, name: "양파", amount: "1/2개" },
        { id: 3, name: "밥", amount: "4그릇" },
        { id: 4, name: "설탕", amount: "1/2 큰 술" },
        { id: 5, name: "간장", amount: "1 작은 술" },
        { id: 6, name: "참기름", amount: "1 큰 술" },
        { id: 7, name: "식용유", amount: "2 큰 술" },
        { id: 8, name: "쪽파", amount: "3개" },
        { id: 9, name: "계란후라이", amount: "4개" }],
      recipePhoto: [{ id: 0, photo: require("../../assets/img_kimchi1.png") },
        { id: 1, photo: require("../../assets/img_kimchi2.png") },
        { id: 2, photo: require("../../assets/img_kimchi3.png") },
        { id: 3, photo: require("../../assets/img_kimchi4.png") },
      ],
    },
  ];
  const [value, setValue] = useState('최신순');
  const [sortVisible, setSortVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "space-between",
            marginTop: 10,
          }}>
            <TouchableOpacity style={{
              width: 170,
              height: 40,
              borderRadius: 7,
              borderWidth: 1,
              borderColor: "#DCDBE6",
              marginTop: 10,
              padding: 10,
            }} onPress={() => setSortVisible(true)}>
              <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontFamily: "tway_air" }}>{value}</Text>
                <Arrow />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("RecipeUpload")}>
              <Image source={require("../../assets/icon_plus.png")} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 50 }}>
            <TextInput style={{
              width: 260,
              height: 40,
              // borderWidth: 1,
              borderColor: "#DCDBE6",
              // borderRadius: 7,
              borderBottomWidth: 1,
              marginRight: 10,
            }} placeholder={"메뉴를 입력해주세요"} paddingLeft={10} />
            <TouchableOpacity style={{
              width: 70,
              height: 40,
              backgroundColor: "#24C58B",
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text style={{ color: "#fff", fontFaily: "tway_air" }}>검색</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            {
              DATA.sort(function(a, b) {
                return b.id - a.id; // 내림차순 : b.id - a.id, 오름차순 : a.id - b.id
              }).map((item, index) => (
                <RecipeListForm item={item} navigation={navigation} key={index} />
              ))
            }
            {
              DATA.sort(function(a, b) {
                return b.like - a.like; // 내림차순 : b.like - a.like, 오름차순 : a.like - b.like
              }).map((item, index) => (
                <RecipeListForm item={item} navigation={navigation} key={index} />
              ))
            }
            {/*{*/}
            {/*  DATA.sort(function(a, b) {*/}
            {/*    if (a < b)*/}
            {/*      return -1;*/}
            {/*    else if (b === a)*/}
            {/*      return 0;*/}
            {/*    else*/}
            {/*      return 1;*/}
            {/*  }).map((item, index) => (*/}
            {/*    <RecipeListForm item={item} navigation={navigation} key={index}/>*/}
            {/*  ))*/}
            {/*}*/}
          </View>
        </View>
        <SortSearchBottomSelector isVisible={sortVisible} setIsVisible={setSortVisible} value={value} setValue={setValue}/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecipeList;
