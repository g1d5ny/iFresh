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
  FlatList,
  ImageBackground,
} from "react-native";
import styled from "styled-components";
import { ProductListForm } from "../../component/user/food/ProductListForm";
import { FoodStyle } from "../../styles/user/food/FoodStyle";
import Milk from "../../assets/img_milk.svg";

const DATA = [
  {
    id: 1,
    photo: require("../../assets/img_food.png"),
    name: "찌개두부",
    fresh: "위험",
  },
  {
    id: 2,
    photo: require("../../assets/img_food.png"),
    name: "찌개두부",
    fresh: "위험",
  },
  {
    id: 3,
    photo: require("../../assets/img_food.png"),
    name: "찌개두부",
    fresh: "위험",
  },
  {
    id: 4,
    photo: require("../../assets/img_food.png"),
    name: "찌개두부",
    fresh: "위험",
  },
  {
    id: 5,
    photo: require("../../assets/img_food.png"),
    name: "찌개두부",
    fresh: "위험",
  },
  {
    id: 6,
    photo: require("../../assets/img_food.png"),
    name: "찌개두부",
    fresh: "위험",
  },
  {
    id: 7,
    photo: require("../../assets/img_milk.jpeg"),
    name: "우유",
    fresh: "적정",
  },
  {
    id: 8,
    photo: require("../../assets/img_milk.jpeg"),
    name: "우유",
    fresh: "적정",
  },
  {
    id: 9,
    photo: require("../../assets/img_milk.jpeg"),
    name: "우유",
    fresh: "적정",
  },
  {
    id: 10,
    photo: require("../../assets/img_milk.jpeg"),
    name: "우유",
    fresh: "적정",
  },
  // {
  //   id: 11,
  //   photo: require("../../assets/img_milk.jpeg"),
  //   name: "우유",
  //   fresh: "적정",
  // },
  {
    id: 12,
    photo: require("../../assets/img_milk.jpeg"),
    name: "우유",
    fresh: "적정",
  },
  {
    id: 13,
    photo: require("../../assets/img_jkm.jpeg"),
    name: "쭈꾸미",
    fresh: "신선",
  },
  {
    id: 14,
    photo: require("../../assets/img_jkm.jpeg"),
    name: "쭈꾸미",
    fresh: "신선",
  },
  {
    id: 15,
    photo: require("../../assets/img_jkm.jpeg"),
    name: "쭈꾸미",
    fresh: "신선",
  },
  // {
  //   id: 16,
  //   photo: require("../../assets/img_jkm.jpeg"),
  //   name: "쭈꾸미",
  //   fresh: "신선",
  // },
  // {
  //   id: 17,
  //   photo: require("../../assets/img_jkm.jpeg"),
  //   name: "쭈꾸미",
  //   fresh: "신선",
  // },
  {
    id: 18,
    photo: require("../../assets/img_jkm.jpeg"),
    name: "쭈꾸미",
    fresh: "신선",
  },
];


const ProductList = ({ navigation, route }) => {

  const [viewOn1, setViewOn1] = useState(true);
  const [viewOn2, setViewOn2] = useState(true);
  const [viewOn3, setViewOn3] = useState(true);

  const f =() => {
    const result = DATA.filter((item, index) => index > 3);

  }

  return (
    <SafeAreaView style={FoodStyle.background}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
          <Text style={{
            color: "#24C58B",
            fontSize: 25,
            fontFamily: "tway_air",
            alignItems: "center",
          }}>나의 냉장고</Text>
        </View>
        <ScrollView>
          <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
            <ScrollView style={{
              backgroundColor: "#fff",
              width: "90%",
              height: 230,
              borderRadius: 10,
            }}>
              <View style={styles.danger}>
                <Text style={styles.dangerText}>위험</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {viewOn1 === true &&
                  <View style={{
                    width: "100%",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                    marginBottom : 20
                  }}>
                    {
                      DATA.map((item, index) => (
                        item.fresh === "위험" &&
                        <ProductListForm item={item} navigation={navigation} key={index}/>
                      ))
                    }
                  </View>
                }
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
          <ScrollView style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 230,
            borderRadius: 10,
          }}>
            <View style={styles.warn}>
              <Text style={styles.warnText}>적정</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {viewOn2 === true &&
                <View style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-around",
                  marginBottom: 20
                }}>
                  {
                    DATA.map((item, index) => (
                      item.fresh === "적정" &&
                      <ProductListForm item={item} navigation={navigation} key={index}/>
                    ))
                  }
                </View>
              }
            </View>
          </ScrollView>
        </View>

        <View style={{ marginTop: 30, marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
          <ScrollView style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 230,
            borderRadius: 10,
          }}>
            <View style={styles.fresh}>
              <Text style={styles.freshText}>신선</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {viewOn3 === true &&
                <View style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-around",
                  marginBottom: 20
                }}>
                  {
                    DATA.map((item, index) => (
                      item.fresh === "신선" &&
                      <ProductListForm item={item} navigation={navigation} key={index}/>
                    ))
                  }
                </View>
              }
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={{
            width: 70, height: 70, backgroundColor: "#24C58B",
            borderRadius: 50, position: "absolute", right: 15, top: 60,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Camera")}
        >
          <Image source={require("../../assets/icon_barcode.png")}
                 style={{ width: 40, height: 30, alignSelf: "center" }} />
          <Image source={require("../../assets/icon_barcode_plus.png")}
                 style={{ width: 20, height: 20, position: "absolute", left: 45, top: 10 }} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  moreText: {
    color: "#2097F6",
    fontFamily: "tway_air",
  },
  more: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom : 20
  },

  freshText: {
    color: "#24C58B",
    fontSize: 15,
    fontFamily: "tway_air",
  },
  fresh: {
    width: 60,
    height: 35,
    borderRadius: 5,
    borderColor: "#24C58B",
    borderWidth: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  warnText: {
    color: "#EAD515",
    fontSize: 15,
    fontFamily: "tway_air",
  },
  warn: {
    width: 60,
    height: 35,
    borderRadius: 5,
    borderColor: "#EAD515",
    borderWidth: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dangerText: {
    color: "red",
    fontSize: 15,
    fontFamily: "tway_air",
  },
  danger: {
    width: 60,
    height: 35,
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // width: '92%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { ProductList };
