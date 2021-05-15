import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Platform, Alert, ImageBackground, } from "react-native";
import styled from 'styled-components'

const instructions = Platform.select({
  ios: "Press CMd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F5FCFF;
`;
const Welcome = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  font-family: 'DancingScript-Bold';
`;
const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
  font-family: 'DancingScript-Regular';
`;

const My = ({ navigation }) => {

  interface Props {
  }

  interface State {
  }

  return (
    <Container>
      <Welcome>My</Welcome>
      <Instructions>To get started, edit App.js</Instructions>
      <Instructions>{instructions}</Instructions>
    </Container>
  );


};

const styles = StyleSheet.create({});

export { My };
