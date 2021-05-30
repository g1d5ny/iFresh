import React, {useState, useEffect} from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import RecipeListForm from "../../component/user/recipe/RecipeListForm";

const WishRecipe = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      photo: require("../../assets/img_pasta.png"),
      name: "까르보나라 파스타",
      author: "g1d5ny",
      time: "15",
      like: "13",
      amount: 4,
      // ingredientName: ["김치", "돼지고기", "양파", "밥", "설탕", "간장", "참기름", "식용유", "쪽파", "계란후라이"],
      // ingredientAmount: ["450g", "200g", "1/2개", "4그릇", "1/2 큰 술", "1 작은 술", "1 큰 술", "2 큰 술", "3개", "4개"]
    },
    {
      id: 2,
      photo: require("../../assets/img_shabu.png"),
      name: "샤브샤브",
      author: "sung_ge",
      time: "20",
      like: "10",
    },
    {
      id: 3,
      photo: require("../../assets/img_kimchi.png"),
      name: "김치 볶음밥",
      author: "daff",
      time: "10",
      like: "5",
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

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
          {
            DATA.map((item, index) => (
              <RecipeListForm item={item} navigation={navigation} />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default WishRecipe;
