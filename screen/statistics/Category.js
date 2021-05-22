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
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';

const Category = ({ navigation }) => {
  const [category, setCategory] = useState("");

  const CONTENT = {
    tableHead: ['Column 0/Row 0', 'Column 1', 'Column 2', 'Column 3'],
    tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
    tableData: [
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
    ],
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 15, color: "#2d2d2d", fontWeight: "bold" }}>월별 범주 그래프</Text>
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
          <PieChart
            data={[
              {
                name: "농산물",
                population: 55,
                color: "#479FF8",
                legendFontColor: "#050505",
                legendFontSize: 15,
              },
              {
                name: "해산물",
                population: 18,
                color: "#80D654",
                legendFontColor: "#050505",
                legendFontSize: 15,
              },
              {
                name: "육류",
                population: 11,
                color: "#929393",
                legendFontColor: "#050505",
                legendFontSize: 15,
              },
              {
                name: "유제품",
                population: 7,
                color: "#EFBD40",
                legendFontColor: "#050505",
                legendFontSize: 15,
              },
              {
                name: "음료",
                population: 5,
                color: "#EA4125",
                legendFontColor: "#050505",
                legendFontSize: 15,
              },
              {
                name: "기타",
                population: 4,
                color: "#C13175",
                legendFontColor: "#050505",
                legendFontSize: 15,
              },
            ]}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
              backgroundColor: "#194ad1",
              backgroundGradientFrom: "#f74871",
              backgroundGradientTo: "#ffbc47",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}

            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            // absolute
          />
          <DataTable style={{borderWidth: 1, borderColor: "#2d2d2d", marginBottom: 40}}>
            <DataTable.Header style={{backgroundColor: '#24C58B', fontWeight: 'bold'}}>
              <DataTable.Title>범주</DataTable.Title>
              <DataTable.Title>총액</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>농산물</DataTable.Cell>
              <DataTable.Cell>55,000</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>해산물</DataTable.Cell>
              <DataTable.Cell>18,000</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>육류</DataTable.Cell>
              <DataTable.Cell>7,000</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>유제품</DataTable.Cell>
              <DataTable.Cell>7,000</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>음료</DataTable.Cell>
              <DataTable.Cell>5,000</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>기타</DataTable.Cell>
              <DataTable.Cell>4,000</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
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
  )
};

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});

export {Category};
