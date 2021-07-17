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
import Arrow from "../../assets/icon_black_down_arrow.svg";
import { MonthBottomModal } from "../../component/user/Modal";

const Category = ({ navigation }) => {

  const [value, setValue] = useState('1월');
  const [isVisible, setIsVisible] = useState();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={StatisticsStyle.font}>월별 범주 그래프</Text>
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
              <Text style={styles.font}>간편식</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#370b6b", marginRight: 10 }} />
              <Text style={styles.font}>면·양념·오일</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#d48858", marginRight: 10 }} />
              <Text style={styles.font}>생수·음료·우유·커피</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#d414f8", marginRight: 10 }} />
              <Text style={styles.font}>간식</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: "#C13175", marginRight: 10 }} />
              <Text style={styles.font}>베이커리·치즈·델리</Text>
            </View>
          </View>

          <DataTable style={{ borderWidth: 1, borderColor: "#2d2d2d", marginBottom: 40 }}>
            <DataTable.Header style={{ backgroundColor: "#24C58B", fontWeight: "bold" }}>
              <DataTable.Title><Text style={StatisticsStyle.font}>범주</Text></DataTable.Title>
              <DataTable.Title><Text style={StatisticsStyle.font}>총액</Text></DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{ borderWidth: 1, borderColor: "#2d2d2d" }}>
              <DataTable.Cell><Text style={StatisticsStyle.font}>채소</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 18,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>과일·견과·쌀</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 5,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>수산·해산·건어물</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 55,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>정육·계란</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 7,000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={StatisticsStyle.font}>간편식</Text></DataTable.Cell>
              <DataTable.Cell><Text style={StatisticsStyle.font}>₩ 11,000</Text></DataTable.Cell>
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
        </View>
        <MonthBottomModal isVisible={isVisible} setIsVisible={setIsVisible} value={value} setValue={setValue}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "tway_air",
    fontSize: 13,
  },
});


export { Category };
