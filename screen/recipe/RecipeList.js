import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import RecipeListForm from "../../component/user/recipe/RecipeListForm";
import { ProductListForm } from "../../component/user/food/ProductListForm";

const RecipeList = ({ navigation }) => {

  const DATA = [
    {
      id: 1,
      photo: require("../../assets/img_pasta.png"),
      name: "명란 까르보나라 파스타",
      author: "g1d5ny",
      time: "15",
      like: "13"
    },
    {
      id: 2,
      photo: require("../../assets/img_shabu.png"),
      name: "샤브샤브",
      author: "sung_ge",
      time: "20",
      like: "10"
    },
    {
      id: 3,
      photo: require("../../assets/img_kimchi.png"),
      name: "김치 볶음밥",
      author: "daff",
      time: "10",
      like: "5"
    },
  ];


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "인기순" },
    { label: "최신순" },
    { label: "가나다순" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              onChangeItem={items => setItems(items.value)}
              setItems={setItems}
              style={{
                width: 100,
                height: 40,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#DCDBE6",
                marginTop: 10,
              }}
              defaultValue={null}
              placeholder="정렬"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#DCDBE6" }}
              containerStyle={{
                height: 40, width: 100,
                borderColor: "#DCDBE6",
                borderWidth: 1,
                borderRadius: 7,
              }}
              style={[{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#dcdbe6" }]}
            />
            <Image source={require("../../assets/icon_plus.png")} style={{ width: 40, height: 40 }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 50 }}>
            <TextInput style={{
              width: 260,
              height: 40,
              borderWidth: 1,
              borderColor: "#DCDBE6",
              borderRadius: 7,
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
              <Text style={{ color: "#fff", fontFaily: "tway_air", fontWeight: "bold" }}>검색</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30}}>
            {
              DATA.map((item, index) => (
                <RecipeListForm item={item} navigation={navigation} />
              ))
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecipeList;
