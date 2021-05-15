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
import { ProductListForm } from "../../component/user/food/ProductListForm";

const ProductList = ({ navigation }) => {

  return (
    <SafeAreaView style={{ backgroundColor: "rgba(36, 197, 139, 0.2)", flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
          <Text style={{ color: "#7550C5", fontSize: 25, fontWeight: "bold" }}>g1d5ny</Text>
          <Text style={{ fontWeight: "700", fontSize: 20 }}> 님의</Text>
          <Text style={{ fontSize: 25, color: "#24C58B", fontWeight: "bold" }}> 식재료</Text>
          <Text style={{ fontWeight: "700", fontSize: 20 }}> 입니다.</Text>
        </View>

        {/*<View style={styles.container}>*/}
        {/*    <ProductListForm />*/}
        {/*</View>*/}

        <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 230,
            borderRadius: 10,
          }}>
            <View style={styles.danger}>
              <Text style={styles.dangerText}>위험</Text>
            </View>
            <View style={styles.foodSort}>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.more}>
              <Text style={styles.moreText}>더보기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 230,
            borderRadius: 10,
          }}>
            <View style={styles.warn}>
              <Text style={styles.warnText}>적정</Text>
            </View>
            <View style={styles.foodSort}>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.more}>
              <Text style={styles.moreText}>더보기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 30, marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            height: 230,
            borderRadius: 10,
          }}>
            <View style={styles.fresh}>
              <Text style={styles.freshText}>신선</Text>
            </View>
            <View style={styles.foodSort}>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
              <View>
                <Image source={require("../../assets/img_food.png")} style={styles.foodStyle} />
                <Text style={styles.foodNameStyle}>찌개두부</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.more}>
              <Text style={styles.moreText}>더보기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          width: 70, height: 70, backgroundColor: "#24C58B",
          borderRadius: 50, position: "absolute", right: 15, top: 60,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/icon_barcode.png')} style={{width: 40, height: 35}}/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({
  moreText: {
    color: "#2097F6",
  },
  more: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  foodNameStyle: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
    // margin: 10,
  },
  foodNameSort: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  foodStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  foodSort: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  freshText: {
    color: "#24C58B",
    fontSize: 15,
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
