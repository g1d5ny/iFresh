import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";

const RecipeListForm = ({ navigation, route, item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity style={{
        margin: 10,
        width: "100%",
        height: 120,
        borderWidth: 1,
        borderColor: "#DCDBE6",
        borderRadius: 7,
        flexDirection: "row",
      }}>
        <Image source={item.photo}
               style={{ flex: 3, width: 120, height: "100%", borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} />
        <View style={{ flex: 6, width: "100%", margin: 15, justifyContent: 'space-between'}}>
          <View style={{width: '100%', height: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 17, fontFamily: "tway_air" }}>{item.name}</Text>
            <Text style={{
              fontSize: 10,
              fontFamily: "tway_air",
              color: "#24C58B",
            }}>{item.author}님</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 13, color:"#BEC0CB", fontFamily: 'tway_air'}}>조리 시간 : {item.time}분</Text>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Image source={require('../../../assets/icon_heart.png')} style={{width: 20, height: 20}} />
            <Text style={{marginLeft: 10, color:"#24C58B", fontFamily: 'tway_air'}}>{item.like}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RecipeListForm;
