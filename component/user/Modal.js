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
                color: "#24C58B",
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
          <Category text={"채소"} unique={"채소"} />
          <Category text={"과일·견과·쌀"} unique={"과일·견과·쌀"} />
          <Category text={"수산·해산·건어물"} unique={"수산·해산·건어물"} />
          <Category text={"정육·계란"} unique={"정육·계란"} />
          <Category text={"간편식"} unique={"간편식"} />
          <Category text={"면·양념·오일"} unique={"면·양념·오일"} />
          <Category text={"생수·음료·우유·커피"} unique={"생수·음료·우유·커피"} />
          <Category text={"간식"} unique={"간식"} />
          <Category text={"베이커리·치즈·델리"} unique={"베이커리·치즈·델리"} />
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
                color: "#24C58B",
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
          <Category text={"냉장"} unique={"냉장"} />
          <Category text={"냉동"} unique={"냉동"} />
          <Category text={"실온"} unique={"실온"} />
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
                color: "#24C58B",
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
          <Category text={"1월"} unique={"1월"} />
          <Category text={"2월"} unique={"2월"} />
          <Category text={"3월"} unique={"3월"} />
          <Category text={"4월"} unique={"4월"} />
          <Category text={"5월"} unique={"5월"} />
          <Category text={"6월"} unique={"6월"} />
          <Category text={"7월"} unique={"7월"} />
          <Category text={"8월"} unique={"8월"} />
          <Category text={"9월"} unique={"9월"} />
          <Category text={"10월"} unique={"10월"} />
          <Category text={"11월"} unique={"11월"} />
          <Category text={"12월"} unique={"12월"} />
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
          <Category text={'최신순'} unique={'최신순'}/>
          <Category text={'팬콕순'} unique={'팬콕순'}/>
          <Category text={'가나다순'} unique={'가나다순'}/>
        </View>
      </View>
    </Modal>
  )
};
