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
  StackedBarChart,
} from "react-native-chart-kit";
import Pie from "react-native-pie";
import { Table, TableWrapper, Row, Rows, Col } from "react-native-table-component";
import { DataTable } from "react-native-paper";
import { StatisticsStyle } from "../../styles/user/statistics/StatisticsStyle";

const Category = ({ navigation }) => {
  const [category, setCategory] = useState("");

  const CONTENT = {
    tableHead: ["Column 0/Row 0", "Column 1", "Column 2", "Column 3"],
    tableTitle: ["Row", "Row 2", "Row 3", "Row 4"],
    tableData: [
      ["1", "2", "3"],
      ["a", "b", "c"],
      ["1", "2", "3"],
      ["a", "b", "c"],
    ],
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={StatisticsStyle.font}>월별 범주 그래프</Text>
          <DropDownPicker
            items={[
              {
                label: "1월", value: "001", icon: () => {
                },
              },
              {
                label: "2월", value: "002", icon: () => {
                },
              },
              {
                label: "3월", value: "003", icon: () => {
                },
              },
              {
                label: "4월", value: "004", icon: () => {
                },
              },
              {
                label: "5월", value: "005", icon: () => {
                },
              },
              {
                label: "6월", value: "006", icon: () => {
                },
              },
              {
                label: "7월", value: "007", icon: () => {
                },
              },
              {
                label: "8월", value: "008", icon: () => {
                },
              },
              {
                label: "9월", value: "009", icon: () => {
                },
              },
              {
                label: "10월", value: "010", icon: () => {
                },
              },
              {
                label: "11월", value: "011", icon: () => {
                },
              },
              {
                label: "12월", value: "012", icon: () => {
                },
              },
            ]}
            defaultValue={null}
            placeholder="월"
            containerStyle={{ height: 40, width: 170, marginTop: 10 }}
            style={[{ backgroundColor: "#fff", borderColor: "#DCDBE6", height: 40, borderRadius: 10 }]}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={item => setCategory(item.value)}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Pie
            radius={100}
            innerRadius={40}
            sections={[
              {
                percentage: 55,
                color: "#479FF8",
              },
              {
                percentage: 18,
                color: "#80D654",
              },
              {
                percentage: 11,
                color: "#929393",
              },
              {
                percentage: 7,
                color: "#EFBD40",
              },
              {
                percentage: 5,
                color: "#EA4125",
              },
              {
                percentage: 4,
                color: "#C13175",
              },
            ]}
            strokeCap={"butt"}
            accessor="percentage"
          />
          <View style={{flexDirection: 'row', marginTop: 40, marginBottom : 20}}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#479FF8", marginRight: 10 }} />
              <Text style={styles.font}>농산물</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#80D654", marginRight: 10 }} />
              <Text style={styles.font}>해산물</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#929393", marginRight: 10 }} />
              <Text style={styles.font}>육류</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom : 40}}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#EFBD40", marginRight: 10 }} />
              <Text style={styles.font}>유제품</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#EA4125", marginRight: 10 }} />
              <Text style={styles.font}>음료</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#C13175", marginRight: 10 }} />
              <Text style={styles.font}>기타</Text>
            </View>
          </View>
          {/*<PieChart*/}
          {/*  data={[*/}
          {/*    {*/}
          {/*      name: "농산물",*/}
          {/*      population: 55,*/}
          {/*      color: "#479FF8",*/}
          {/*      legendFontColor: "#050505",*/}
          {/*      legendFontSize: 15,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "해산물",*/}
          {/*      population: 18,*/}
          {/*      color: "#80D654",*/}
          {/*      legendFontColor: "#050505",*/}
          {/*      legendFontSize: 15,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "육류",*/}
          {/*      population: 11,*/}
          {/*      color: "#929393",*/}
          {/*      legendFontColor: "#050505",*/}
          {/*      legendFontSize: 15,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "유제품",*/}
          {/*      population: 7,*/}
          {/*      color: "#EFBD40",*/}
          {/*      legendFontColor: "#050505",*/}
          {/*      legendFontSize: 15,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "음료",*/}
          {/*      population: 5,*/}
          {/*      color: "#EA4125",*/}
          {/*      legendFontColor: "#050505",*/}
          {/*      legendFontSize: 15,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "기타",*/}
          {/*      population: 4,*/}
          {/*      color: "#C13175",*/}
          {/*      legendFontColor: "#050505",*/}
          {/*      legendFontSize: 15,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  width={Dimensions.get("window").width}*/}
          {/*  height={220}*/}
          {/*  chartConfig={{*/}
          {/*    backgroundColor: "#194ad1",*/}
          {/*    backgroundGradientFrom: "#f74871",*/}
          {/*    backgroundGradientTo: "#ffbc47",*/}
          {/*    decimalPlaces: 2,*/}
          {/*    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,*/}
          {/*  }}*/}
          {/*  style={{*/}
          {/*    marginVertical: 8,*/}
          {/*    borderRadius: 10,*/}
          {/*  }}*/}

          {/*  accessor="population"*/}
          {/*  backgroundColor="transparent"*/}
          {/*  paddingLeft="15"*/}
          {/*  // absolute*/}
          {/*/>*/}

          <DataTable style={{ borderWidth: 1, borderColor: "#2d2d2d", marginBottom: 40 }}>
            <DataTable.Header style={{ backgroundColor: "#24C58B", fontWeight: "bold" }}>
              <DataTable.Title><Text style={StatisticsStyle.font}>범주</Text></DataTable.Title>
              <DataTable.Title><Text style={StatisticsStyle.font}>총액</Text></DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{ borderWidth: 1, borderColor: "#2d2d2d" }}>
              <DataTable.Cell><Text style={StatisticsStyle.font}>농산물</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 55,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>해산물</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 18,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>육류</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 11,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>유제품</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 7,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>음료</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 5,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>기타</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 4,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ backgroundColor: "#ECECEA", borderWidth: 1, borderColor: "#2d2d2d" }}>
              <DataTable.Cell><Text style={StatisticsStyle.font}>총액</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 100,000</Text></DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <View style={{
            width: 385,
            borderWidth: 0.7,
            borderColor: "#2d2d2d",
            transform: [{ rotate: "90deg" }],
            position: "absolute",
            bottom: 232,
            right: 20,
          }} />

          {/*<Table borderStyle={{ borderWidth: 1 }}>*/}
          {/*  <Row*/}
          {/*    data={CONTENT.tableHead}*/}
          {/*    flexArr={[1, 2, 1, 1]}*/}
          {/*    style={styles.head}*/}
          {/*    textStyle={styles.text}*/}
          {/*  />*/}
          {/*  <TableWrapper style={styles.wrapper}>*/}
          {/*    <Col*/}
          {/*      data={CONTENT.tableTitle}*/}
          {/*      style={styles.title}*/}
          {/*      heightArr={[28, 28]}*/}
          {/*      textStyle={styles.text}*/}
          {/*    />*/}
          {/*    <Rows*/}
          {/*      data={CONTENT.tableData}*/}
          {/*      flexArr={[2, 1, 1]}*/}
          {/*      style={styles.row}*/}
          {/*      textStyle={styles.text}*/}
          {/*    />*/}
          {/*  </TableWrapper>*/}
          {/*</Table>*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "tway_air",
    fontWeight: "bold",
    fontSize: 13,
  },
});


export { Category };
