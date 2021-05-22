import React, { useEffect, useState, Component } from "react";
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
  Dimensions,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Category = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    backgroundColor: 'pink',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    // color: (opacity = 1) => `pink`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 15, color: "#2d2d2d", fontWeight: 'bold'}}>월별 범주 그래프</Text>
          <DropDownPicker
            items={[
              {label: '1월', value: '001', icon: () => {}},
              {label: '2월', value: '002', icon: () => {}},
              {label: '3월', value: '003', icon: () => {}},
              {label: '4월', value: '004', icon: () => {}},
              {label: '5월', value: '005', icon: () => {}},
              {label: '6월', value: '006', icon: () => {}},
              {label: '7월', value: '007', icon: () => {}},
              {label: '8월', value: '008', icon: () => {}},
              {label: '9월', value: '009', icon: () => {}},
              {label: '10월', value: '010', icon: () => {}},
              {label: '11월', value: '011', icon: () => {}},
              {label: '12월', value: '012', icon: () => {}},
            ]}
            defaultValue={null}
            placeholder='범주'
            containerStyle={{height: 40, width: 170, marginTop: 10}}
            style={[{backgroundColor: '#fff', borderColor: "#DCDBE6", height: 40, borderRadius: 10}]}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setCategory(item.value)}
          />
        </View>
        <View>
          <LineChart
            data={{
              labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
              datasets: [
                {
                  data: [
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000",
                    parseInt(Math.random()*100)+"000"
                  ]
                }
              ]
            }}
            width={350} // from react-native
            height={400}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              // backgroundColor: "pink",
              backgroundGradientFrom: "#DCDBE6",
              backgroundGradientTo: "#DCDBE6",
              decimalPlaces: 0, // optional, defaults to 2dp
              // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              color: (opacity = 1) => `rgba(36, 197, 139, ${opacity})`,
              // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
              width: 350,
              marginVertical: 8,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center'
            }}
          />
        </View>
        {/*<LineChart*/}
        {/*  data={data}*/}
        {/*  width={Dimensions.get("window").width}*/}
        {/*  height={220}*/}
        {/*  chartConfig={chartConfig}*/}
        {/*/>*/}
      </ScrollView>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({});

export { Category };
