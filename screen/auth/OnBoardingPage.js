import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Animated, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { AuthStyle } from "../../styles/auth/AuthStyle";
import { screenHeight, screenWidth } from "../../styles/DimenStyle";

const height = screenHeight;
const width = screenWidth;

const OnBoardingPage = () => {
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 48,
          width,
          height,
          backgroundColor: "#fff",
        }}>
        <ScrollView pagingEnabled={true} horizontal={true} onScroll={change} scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false} ref={ref => (this.scrollView = ref)}
                    style={{ width, height }}>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/img_OnBoarding1.png")} style={AuthStyle.onBoardingImage} />
            <View style={{ alignItems: "center", marginTop: 80 }}>
              <Text style={AuthStyle.step}>ONE Step</Text>
              <Text style={AuthStyle.onBoardingText}>간편한 식재료 영수증 인식!</Text>
            </View>
            <View style={AuthStyle.stepLine}>
              <View style={{
                width: "33%",
                borderWidth: 1,
                borderColor: "#24C58B",
              }} />
            </View>
            <View style={{ width: "80%", marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity style={AuthStyle.skipView}>
                <Text style={AuthStyle.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={AuthStyle.nextView}
                                onPress={() => this.scrollView.scrollTo({ x: screenWidth, })}>
                <Text style={AuthStyle.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/img_OnBoarding2.png")} style={AuthStyle.onBoardingImage} />
            <View style={{ alignItems: "center", marginTop: 80 }}>
              <Text style={AuthStyle.step}>TWO Step</Text>
              <Text style={AuthStyle.onBoardingText}>신선한 식재료 유지를 위한 관리!</Text>
            </View>
            <View style={AuthStyle.stepLine}>
              <View style={{
                width: "66%",
                borderWidth: 1,
                borderColor: "#24C58B",
              }} />
            </View>
            <View style={{ width: "80%", marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity style={AuthStyle.skipView}>
                <Text style={AuthStyle.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={AuthStyle.nextView}
                                onPress={() => this.scrollView.scrollTo({ x: screenWidth * 2, })}>
                <Text style={AuthStyle.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/img_OnBoarding3.png")} style={AuthStyle.onBoardingImage} />
            <View style={{ alignItems: "center", marginTop: 69 }}>
              <Text style={AuthStyle.step}>THREE Step</Text>
              <Text style={AuthStyle.onBoardingText}>친구들이 올린 레시피를 통해 오늘 한 끼 해결!</Text>
            </View>
            <View style={AuthStyle.stepLine}>
              <View style={{
                width: "66%",
                borderWidth: 1,
                borderColor: "#24C58B",
              }} />
            </View>
            <View style={{ width: "80%", marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity style={AuthStyle.skipView} />
              <TouchableOpacity style={AuthStyle.nextView}>
                <Text style={AuthStyle.nextText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export { OnBoardingPage };
