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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1월" },
    { label: "2월" },
    { label: "3월" },
    { label: "4월" },
    { label: "5월" },
    { label: "6월" },
    { label: "7월" },
    { label: "8월" },
    { label: "9월" },
    { label: "10월" },
    { label: "11월" },
    { label: "12월" },
  ]);


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
          <View style={{
            width: 170,
            height: 40,
            marginBottom: 20,
            borderColor: "#DCDBE6",
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
              dropDownStyle={{ width: 170, height: 40, borderColor: "#DCDBE6", borderWidth: 1 }}
              // containerStyle={{height: 40, width: 300,
              //   marginTop: 10,}}
              // style={[{backgroundColor: '#fff'}]}
            />
          </View>
          {/*<DropDownPicker*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      label: "1월", value: "001", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "2월", value: "002", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "3월", value: "003", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "4월", value: "004", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "5월", value: "005", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "6월", value: "006", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "7월", value: "007", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "8월", value: "008", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "9월", value: "009", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "10월", value: "010", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "11월", value: "011", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*    {*/}
          {/*      label: "12월", value: "012", icon: () => {*/}
          {/*      },*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  defaultValue={null}*/}
          {/*  placeholder="월"*/}
          {/*  containerStyle={{ height: 40, width: 170, marginTop: 10 }}*/}
          {/*  style={[{ backgroundColor: "#fff", borderColor: "#DCDBE6", height: 40, borderRadius: 10 }]}*/}
          {/*  itemStyle={{*/}
          {/*    justifyContent: "flex-start",*/}
          {/*  }}*/}
          {/*  dropDownStyle={{ backgroundColor: "#fafafa" }}*/}
          {/*  onChangeItem={item => setCategory(item.value)}*/}
          {/*/>*/}
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
                color: "#9b5ebc",
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
          <View style={{ flexDirection: "row", marginTop: 40, marginBottom: 20 }}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#80D654", marginRight: 10 }} />
              <Text style={styles.font}>채소</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#EA4125", marginRight: 10 }} />
              <Text style={styles.font}>과일·견과·쌀</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#479FF8", marginRight: 10 }} />
              <Text style={styles.font}>수산·해산·건어물</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#EFBD40", marginRight: 10 }} />
              <Text style={styles.font}>정육·계란</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#929393", marginRight: 10 }} />
              <Text style={styles.font}>국·반찬·메인요리</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#428621", marginRight: 10 }} />
              <Text style={styles.font}>샐러드·간편식</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#370b6b", marginRight: 10 }} />
              <Text style={styles.font}>면·양념·오일</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#d48858", marginRight: 10 }} />
              <Text style={styles.font}>생수·음료·우유·커피</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#d414f8", marginRight: 10 }} />
              <Text style={styles.font}>간식·과자·떡·커피</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 40 }}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#C13175", marginRight: 10 }} />
              <Text style={styles.font}>베이커리·치즈·델리</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#9b5ebc", marginRight: 10 }} />
              <Text style={styles.font}>건강식품</Text>
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
              <DataTable.Cell><Text style={StatisticsStyle.font}>수산·해산·건어물</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 55,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>채소</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 18,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>건강식품</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 11,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>정육·계란</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 7,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>과일·견과·쌀</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 5,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>베이커리·치즈·델리</Text></DataTable.Cell>
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
