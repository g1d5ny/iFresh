import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Camera = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C4C4C4" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}>
        <View style={{
          marginTop: 10,
          width: "95%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
          <Image source={require("../../assets/icon_settings.png")} />
          <Image source={require("../../assets/icon_flash_off.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <Image source={require("../../assets/icon_close.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../../assets/icon_barcode.png")}
                 style={{ width: 200, height: 160 }} />
        </View>
        <View style={{
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('ProductAdd')}>
            <Image source={require("../../assets/icon_camera_button.png")} />
          </TouchableOpacity>
        </View>
        <Image source={require("../../assets/icon_camera_reverse.png")}
               style={{ position: "absolute", bottom: 20, right: 15 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export { Camera };
