import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import IconLineCheck from "../../assets/icon_check.svg";
import IconGraySlice from "../../assets/icon_gray_slice.svg";
import Modal from "react-native-modal";

export const CategoryBottomModal = ({ isVisible, setIsVisible, value, setValue }) => {
  const Category = ({ text, unique }) => {
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingLeft: 12 }}
                        onPress={() => {
                          setValue(unique), setIsVisible(false);
                        }}>
        {
          unique === value ? (
            <>
              <View style={{ width: 24, alignItems: "center" }}>
                <IconLineCheck />
              </View>
              <Text style={{
                fontFamily: "tway_air",
                fontSize: 14,
                color: "#24C58B",
                marginLeft: 4,
              }}>
                {text}
              </Text>
            </>
          ) : (
            <>
              <View style={{ width: 24, alignItems: "center" }}>

              </View>
              <Text style={{
                fontFamily: "tway_air",
                fontSize: 14,
                color: "#2d2d2d",
                marginLeft: 4,
              }}>
                {text}
              </Text>
            </>
          )
        }
      </TouchableOpacity>
    );
  };

  return (
    <Modal isVisible={isVisible}
           useNativeDriver={true}
           hideModalContentWhileAnimating={true}
           onBackButtonPress={() => setIsVisible(false)}
           onBackdropPress={() => setIsVisible(false)} style={{ justifyContent: "flex-end", margin: 0 }}>
      <View style={{
        width: "100%",
        height: Platform.OS === "ios" ? 330 : 270,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}>
        <View style={{ width: "100%", height: 30, justifyContent: "center", alignItems: "center" }}>
          <IconGraySlice />
        </View>
        <View style={{ width: "100%", justifyContent: "space-around", height: 270 }}>
          <Category text={"??????"} unique={"??????"} />
          <Category text={"???????????????????"} unique={"???????????????????"} />
          <Category text={"?????????????????????????"} unique={"?????????????????????????"} />
          <Category text={"??????????????"} unique={"??????????????"} />
          <Category text={"?????????"} unique={"?????????"} />
          <Category text={"???????????????????"} unique={"???????????????????"} />
          <Category text={"??????????????????????????????"} unique={"??????????????????????????????"} />
          <Category text={"??????"} unique={"??????"} />
          <Category text={"????????????????????????????"} unique={"????????????????????????????"} />
        </View>
      </View>
    </Modal>
  );
};

export const StorageBottomModal = ({ isVisible, setIsVisible, value, setValue }) => {
  const Category = ({ text, unique }) => {
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingLeft: 12 }}
                        onPress={() => {
                          setValue(unique), setIsVisible(false);
                        }}>
        {
          unique === value ? (
            <>
              <View style={{ width: 24, alignItems: "center" }}>
                <IconLineCheck />
              </View>
              <Text style={{
                fontFamily: "tway_air",
                fontSize: 14,
                color: "#24C58B",
                marginLeft: 4,
              }}>
                {text}
              </Text>
            </>
          ) : (
            <>
              <View style={{ width: 24, alignItems: "center" }}>

              </View>
              <Text style={{
                fontFamily: "tway_air",
                fontSize: 14,
                color: "#2d2d2d",
                marginLeft: 4,
              }}>
                {text}
              </Text>
            </>
          )
        }
      </TouchableOpacity>
    );
  };

  return (
    <Modal isVisible={isVisible}
           useNativeDriver={true}
           hideModalContentWhileAnimating={true}
           onBackButtonPress={() => setIsVisible(false)}
           onBackdropPress={() => setIsVisible(false)} style={{ justifyContent: "flex-end", margin: 0 }}>
      <View style={{
        width: "100%",
        height: Platform.OS === "ios" ? 150 : 120,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}>
        <View style={{ width: "100%", height: 30, justifyContent: "center", alignItems: "center" }}>
          <IconGraySlice />
        </View>
        <View style={{ width: "100%", justifyContent: "space-around", height: 90 }}>
          <Category text={"??????"} unique={"??????"} />
          <Category text={"??????"} unique={"??????"} />
          <Category text={"??????"} unique={"??????"} />
        </View>
      </View>
    </Modal>
  )};

export const MonthBottomModal = ({ isVisible, setIsVisible, value, setValue }) => {
  const Category = ({ text, unique }) => {
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingLeft: 12 }}
                        onPress={() => {
                          setValue(unique), setIsVisible(false);
                        }}>
        {
          unique === value ? (
            <>
              <View style={{ width: 24, alignItems: "center" }}>
                <IconLineCheck />
              </View>
              <Text style={{
                fontFamily: "tway_air",
                fontSize: 14,
                color: "#24C58B",
                marginLeft: 4,
              }}>
                {text}
              </Text>
            </>
          ) : (
            <>
              <View style={{ width: 24, alignItems: "center" }}>

              </View>
              <Text style={{
                fontFamily: "tway_air",
                fontSize: 14,
                color: "#2d2d2d",
                marginLeft: 4,
              }}>
                {text}
              </Text>
            </>
          )
        }
      </TouchableOpacity>
    );
  };

  return (
    <Modal isVisible={isVisible}
           useNativeDriver={true}
           hideModalContentWhileAnimating={true}
           onBackButtonPress={() => setIsVisible(false)}
           onBackdropPress={() => setIsVisible(false)} style={{ justifyContent: "flex-end", margin: 0 }}>
      <View style={{
        width: "100%",
        height: Platform.OS === "ios" ? 400 : 270,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}>
        <View style={{ width: "100%", height: 30, justifyContent: "center", alignItems: "center" }}>
          <IconGraySlice />
        </View>
        <View style={{ width: "100%", justifyContent: "space-around", height: 350 }}>
          <Category text={"1???"} unique={"1???"} />
          <Category text={"2???"} unique={"2???"} />
          <Category text={"3???"} unique={"3???"} />
          <Category text={"4???"} unique={"4???"} />
          <Category text={"5???"} unique={"5???"} />
          <Category text={"6???"} unique={"6???"} />
          <Category text={"7???"} unique={"7???"} />
          <Category text={"8???"} unique={"8???"} />
          <Category text={"9???"} unique={"9???"} />
          <Category text={"10???"} unique={"10???"} />
          <Category text={"11???"} unique={"11???"} />
          <Category text={"12???"} unique={"12???"} />
        </View>
      </View>
    </Modal>
  );
};

export const SortSearchBottomSelector = ({isVisible, setIsVisible, value, setValue}) => {

  const SetTextValue = async ({unique}) => {
    await setValue(unique);
  }

  const Category = ({text, unique}) => {
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center',paddingLeft: 12, }} onPress={()=>SetTextValue({ unique }).then(() => setIsVisible(false))}>
        {
          unique === value ? (
            <>
              <View style={{ width: 24, alignItems: 'center', }}>
                <IconLineCheck/>
              </View>
              <Text style={{fontFamily: 'tway_air', fontSize: 14, color: "#24C58B", marginLeft: 4}}>
                {text}
              </Text>
            </>
          ) : (
            <>
              <View style={{ width: 24, alignItems: 'center', }}>

              </View>
              <Text style={{fontFamily: 'tway_air', fontSize: 14, color: "#2d2d2d", marginLeft: 4}}>
                {text}
              </Text>
            </>
          )
        }
      </TouchableOpacity>
    )
  };
  return (
    <Modal isVisible={isVisible}
           useNativeDriver={true}
           hideModalContentWhileAnimating={true}
           onBackButtonPress={() => setIsVisible(false)}
           onBackdropPress={() => setIsVisible(false)} style={{justifyContent: "flex-end", margin: 0}}>
      <View style={{
        width: "100%",
        height: Platform.OS === 'ios' ? 180 : 150,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }}>
        <View style={{width: "100%", height: 30, justifyContent: "center", alignItems: "center"}}>
          <IconGraySlice/>
        </View>
        <View style={{width: '100%', justifyContent: 'space-around', height: 98}}>
          <Category text={'?????????'} unique={'?????????'}/>
          <Category text={'?????????'} unique={'?????????'}/>
          <Category text={'????????????'} unique={'????????????'}/>
        </View>
      </View>
    </Modal>
  )
};
