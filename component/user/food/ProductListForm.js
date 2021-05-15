import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductListForm = ({ navigation, item }) => {

  return (
    <View style={{ margin: 5 }}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
        <Image source={item.photo} style={styles.foodStyle} />
      </TouchableOpacity>
      <Text style={styles.foodNameStyle}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  foodNameStyle: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
    fontFamily: "tway_air",
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
  foodSort: {},
});
export { ProductListForm };
