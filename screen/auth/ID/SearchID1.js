import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { AuthStyle } from "../../../styles/auth/AuthStyle";

const SearchID1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ marginTop: 250 }}>
            <Text style={AuthStyle.list}>이름</Text>
            <TextInput
              placeholder={"이름"}
              style={AuthStyle.input}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={AuthStyle.list}>연락처</Text>
              <TextInput
                placeholder={"연락처"}
                style={AuthStyle.input}
              />
            </View>
          </View>
          <View style={{ marginTop: 150 }}>
            <TouchableOpacity style={AuthStyle.nextButton}
                              onPress={() => {
                                console.log("success {user_email: \"jiwon936626@gmail.com\"}");
                                navigation.navigate("SearchID2");
                              }}>
              <Text style={AuthStyle.buttonText}>아이디 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { SearchID1 };
