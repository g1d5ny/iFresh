import React, { useEffect, useState, Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Platform, Alert, Dimensions, ImageBackground, } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LineChart } from "react-native-chart-kit";
import { StatisticsStyle } from "../../styles/user/statistics/StatisticsStyle";
import Arrow from "../../assets/icon_black_down_arrow.svg";
import { CategoryBottomModal, MonthBottomModal } from "../../component/user/Modal";

const Expenditure = ({ navigation }) => {

  const [value, setValue] = useState('1월');
  const [isVisible, setIsVisible] = useState();


  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={{margin: 20}}>
          <Text style={StatisticsStyle.font}>월별 지출 그래프</Text>
          <TouchableOpacity style={{width: 170,
            height: 40,
            borderRadius: 7,
            borderWidth: 1,
            borderColor: "#DCDBE6",
            marginTop: 10,
            padding: 10,}} onPress={() => setIsVisible(true)}>
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontFamily: "tway_air",}}>{value}</Text>
              <Arrow />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <LineChart
            data={{
              labels: ["1주", "2주", "3주", "4주", ],
              labelAlignment: 'center',
              datasets: [
                {
                  data: [
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                  ]
                }
              ]
            }}
            width={350} // from react-native
            height={350}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              // backgroundColor: "pink",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0, // optional, defaults to 2dp
              // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              color: (opacity = 1) => `rgba(36, 197, 139, ${opacity})`,
              // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `#2d2d2d`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: "5",
                // strokeWidth: "1",
                // stroke: "#fff"
              }
            }}
            bezier
            style={{
              width: 360,
              height: 360,
              // marginVertical: 8,
              borderRadius: 10,
              borderWidth: 1,
              borderColor:"#DCDBE6",
              // alignItems: 'center',
              // justifyContent: 'center'
            }}
          />
        </View>
        <MonthBottomModal isVisible={isVisible} setIsVisible={setIsVisible} value={value} setValue={setValue}/>
      </ScrollView>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({});

export { Expenditure };
