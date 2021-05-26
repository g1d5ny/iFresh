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
import { StatisticsStyle } from "../../styles/user/statistics/StatisticsStyle";


const Expenditure = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: '1월'},
      {label: '2월'},
      {label: '3월'},
      {label: '4월'},
      {label: '5월'},
      {label: '6월'},
      {label: '7월'},
      {label: '8월'},
      {label: '9월'},
      {label: '10월'},
      {label: '11월'},
      {label: '12월'},
  ]);

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
          <Text style={StatisticsStyle.font}>월별 지출 그래프</Text>
          <View style={{
            width: 170,
            height: 40,
            marginBottom: 20
          }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              onChangeItem={items => setItems(items.value)}
              setItems={setItems}
              style={{
                width: 170,
                height: 40,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#DCDBE6",
                marginTop: 10,
              }}
              defaultValue={null}
              placeholder="월"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#DCDBE6" }}
              // containerStyle={{height: 40, width: 300,
              //   marginTop: 10,}}
              // style={[{backgroundColor: '#fff'}]}
            />
          </View>
          {/*<DropDownPicker*/}
          {/*  items={[*/}
          {/*    {label: '1월', value: '001', icon: () => {}},*/}
          {/*    {label: '2월', value: '002', icon: () => {}},*/}
          {/*    {label: '3월', value: '003', icon: () => {}},*/}
          {/*    {label: '4월', value: '004', icon: () => {}},*/}
          {/*    {label: '5월', value: '005', icon: () => {}},*/}
          {/*    {label: '6월', value: '006', icon: () => {}},*/}
          {/*    {label: '7월', value: '007', icon: () => {}},*/}
          {/*    {label: '8월', value: '008', icon: () => {}},*/}
          {/*    {label: '9월', value: '009', icon: () => {}},*/}
          {/*    {label: '10월', value: '010', icon: () => {}},*/}
          {/*    {label: '11월', value: '011', icon: () => {}},*/}
          {/*    {label: '12월', value: '012', icon: () => {}},*/}
          {/*  ]}*/}
          {/*  defaultValue={null}*/}
          {/*  placeholder='월'*/}
          {/*  containerStyle={{height: 40, width: 170, marginTop: 10}}*/}
          {/*  style={[{backgroundColor: '#fff', borderColor: "#DCDBE6", height: 40, borderRadius: 10}]}*/}
          {/*  itemStyle={{*/}
          {/*    justifyContent: 'flex-start'*/}
          {/*  }}*/}
          {/*  dropDownStyle={{backgroundColor: '#fafafa'}}*/}
          {/*  onChangeItem={item => setCategory(item.value)}*/}
          {/*/>*/}
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

export { Expenditure };
