import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductListForm = ({item}) => {

  return(
    <View style={{marginTop: 30, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{
        backgroundColor: '#fff',
        width: '90%',
        height: 150,
        borderRadius: 5
      }}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  starNum: {
    fontSize: 12,
    color:"#FFCD4C"
  },
  chatNum: {
    color:"#7e5ffa",
    fontSize:11
  },
  thirdLine: {
    flexDirection: 'row',
    marginTop: 7
  },
  content: {
    fontSize: 11,
    color:"#BEC0CB"
  },
  percent: {
    fontSize: 12,
    color:"#7e5ffa",
    fontWeight:"bold"
  },
  name: {
    fontWeight:"bold",
    fontSize: 16
  },
  firstLine: {
    flexDirection: 'row',
    marginBottom: 5
  },
  containerInView: {
    alignItems:"flex-start",
    justifyContent: "center",
    flex:1,
    paddingLeft: 15
  },
  container: {
    margin: 8,
    backgroundColor:"#fff",
    width:355,
    height:115,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius: 11,
    borderColor:"#DCDBE6",
    borderWidth: 1
  },
});
export {ProductListForm};
