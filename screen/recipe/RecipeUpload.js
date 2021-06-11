import React, { useState, useEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Style } from "../../styles/user/Style";
// import * as ImagePicker from "react-native-image-picker/src";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const RecipeUpload = ({ navigation }) => {

  const [ingredients, setIngredients] = useState(0);
  const [way, setWay] = useState(0);
  const [img, setImg] = useState(3);
  const [imgFile, setImgFile] = useState([]);
  const [imgLoading, setImgLoading] = useState(false);

  const PlusView = ({ setPlus }) => {
    return (
      <TouchableOpacity style={{
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 35,
        borderColor: "#C4C4C4",
        borderWidth: 1,
        backgroundColor: "#F4F5F8",
        borderRadius: 7,
        marginTop: 20,
      }} onPress={() => setPlus(prev => prev + 1)}>
        <Image source={require("../../assets/icon_plus_gray.png")} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    );
  };

  const MinView = ({ setMinus }) => {
    return (
      <TouchableOpacity style={{
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 35,
        borderColor: "#C4C4C4",
        borderWidth: 1,
        backgroundColor: "#F4F5F8",
        borderRadius: 7,
        marginTop: 20,
      }} onPress={() => setMinus(prev => prev - 1)}>
        <Image source={require("../../assets/icon_minus.png")} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    );
  };

  const testFunction = (test, setTest) => {
    if (test === 0) {
      return <PlusView setPlus={setTest} />;
    } else if (test > 0 && test <= 6) {
      return (
        <>
          <PlusView setPlus={setTest} />
          <MinView setMinus={setTest} />
        </>
      );
    } else if (test > 6) {
      return (
        <MinView setMinus={setTest} />
      );
    }
    return null;
  };

  const testFunction2 = (test, setTest) => {
    if (test === 0) {
      return <PlusView setPlus={setTest} />;
    } else if (test > 0 && test <= 3) {
      return (
        <>
          <PlusView setPlus={setTest} />
          <MinView setMinus={setTest} />
        </>
      );
    } else if (test > 3) {
      return (
        <MinView setMinus={setTest} />
      );
    }
    return null;
  };


  const cookWay = () => {
    let aa = [];
    for (let i = 1; i <= 6; i++) {
      aa.push(
        <View style={{ width: "100%" }}>
          <View style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }} key={i.toString()}>
            <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {i}. </Text>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View style={{
                width: "97%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                // justifyContent: "center",
                padding: 10,
                // marginBottom: 20,
                // alignSelf: 'center'
              }}>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                  <Text style={[{
                    fontSize: 12, flex: 1,
                  }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                    {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                  </Text>
                  <View>
                    <Image source={require("../../assets/icon_upload.png")} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            width: "97%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}>
            <Text style={{ fontSize: 14, fontFamily: "tway_air", color: "white" }}> {i}. </Text>
            <TextInput
              style={{
                width: "97%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "flex-end",
                padding: 10,
                alignSelf: "center",
              }}
            />
          </View>
        </View>,
      );
    }
    return aa;
  };

  const ingredient = () => {
    let ing = [];
    for (let i = 0; i < 3; i++) {
      ing.push(
        <View style={{
          width: "90%",
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <TextInput style={{
            width: 170,
            height: 35,
            borderWidth: 1,
            borderColor: "#C4C4C4",
            borderRadius: 7,
            justifyContent: "center",
            padding: 10,
          }} placeholder={"재료명"} />
          <TextInput style={{
            width: 170,
            height: 35,
            borderWidth: 1,
            borderColor: "#C4C4C4",
            borderRadius: 7,
            justifyContent: "center",
            padding: 10,
          }} placeholder={"재료양"} />
        </View>,
      );
    }
    return ing;
  };
  // console.log("test: " + test);
  // console.log("img: " + img);
  return (
    <SafeAreaView style={Style.background}>
      <ScrollView>
        <View>
          <View style={{ marginTop: 20, backgroundColor: "#fff" }}>
            <View style={{ width: "90%", height: 170, flexDirection: "row" }}>
              <View style={{ width: 150, height: "100%", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{
                  backgroundColor: "#F4F5F8",
                  width: 120,
                  height: 120,
                  borderRadius: 7,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image source={require("../../assets/icon_empty.png")}
                         style={{ width: 40, height: 40, borderRadius: 10 }} />
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <View>
                  <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>레시피이름</Text>
                  <TextInput style={{
                    width: 200,
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    marginTop: 10,
                    justifyContent: "center",
                    padding: 10,
                  }} placeholder={"레시피이름"} />
                  {/*  <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{route.params.data.name}</Text>*/}
                  {/*</TextInput>*/}
                </View>
                <View>
                  <Text style={{ fontFamily: "tway_air", fontSize: 14, marginTop: 10 }}>글쓴이</Text>
                  <TextInput style={{
                    width: 200,
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    marginTop: 10,
                    justifyContent: "center",
                    padding: 10,
                  }} placeholder={"글쓴이"} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center", paddingBottom: 20 }}>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>조리 시간</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>양</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <TextInput style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }} placeholder={"조리시간"} />
              <TextInput style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }} placeholder={"양"} />
            </View>
          </View>
          <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center", paddingBottom: 20 }}>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>재료</Text>
              </View>
            </View>
            {
              ingredient()
            }
            {
              ingredients > 0 && (
                <View style={{ width: "90%" }}>
                  {
                    [...Array(ingredients)].map(((n, index) => (
                      <View style={{
                        width: "100%",
                        marginTop: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }} key={index.toString()}>
                        <TextInput style={{
                          width: 170,
                          height: 35,
                          borderWidth: 1,
                          borderColor: "#C4C4C4",
                          borderRadius: 7,
                          justifyContent: "center",
                          padding: 10,
                        }} placeholder={"재료명"} />
                        <TextInput style={{
                          width: 170,
                          height: 35,
                          borderWidth: 1,
                          borderColor: "#C4C4C4",
                          borderRadius: 7,
                          justifyContent: "center",
                          padding: 10,
                        }} placeholder={"재료양"} />
                      </View>
                    )))
                  }
                </View>
              )
            }
            {
              testFunction(ingredients, setIngredients)
            }
          </View>
        </View>
        <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center", paddingBottom: 20 }}>
          <View style={{
            width: "90%",
            alignItems: "center",
            marginTop: 20,
          }}>
            <View style={{ width: "100%" }}>
              <Text style={{ fontSize: 14, fontFamily: "tway_air" }}>조리 방법</Text>
            </View>
            {
              cookWay()
            }
            {
              way > 0 && (
                <View style={{ width: "100%" }}>
                  {
                    [...Array(way)].map(((n, index) => (
                      <>
                        <View style={{
                          width: "100%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 20,
                        }} key={index.toString()}>
                          {
                            index !== 3 ? (
                              <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {index+7}. </Text>
                            ) : (
                              <Text style={{ fontSize: 14, fontFamily: "tway_air" }}>{index+7}. </Text>
                            )
                          }
                          <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View style={{
                              width: "97%",
                              height: 35,
                              borderWidth: 1,
                              borderColor: "#C4C4C4",
                              borderRadius: 7,
                              // justifyContent: "center",
                              padding: 10,
                              // marginBottom: 20,
                              // alignSelf: 'center'
                            }}>
                              <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                                <Text style={[{
                                  fontSize: 12, flex: 1,
                                }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                                  {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                                </Text>
                                <View>
                                  <Image source={require("../../assets/icon_upload.png")} />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={{
                          width: "97%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 10,
                        }}>
                          {
                            index !== 3 ? (
                              <Text style={{ fontSize: 14, fontFamily: "tway_air", color: "white" }}> {index+7}. </Text>
                            ) : (
                              <Text style={{ fontSize: 14, fontFamily: "tway_air", color: "white" }}>{index+7}. </Text>
                            )
                          }
                          <TextInput
                            style={{
                              width: "97%",
                              height: 35,
                              borderWidth: 1,
                              borderColor: "#C4C4C4",
                              borderRadius: 7,
                              justifyContent: "flex-end",
                              padding: 10,
                              alignSelf: "center",
                            }}
                          />
                        </View>
                      </>
                    )))
                  }
                </View>
              )
            }
          </View>
          {
            testFunction2(way, setWay)
          }
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", margin: 40 }}>
          <TouchableOpacity style={Style.button} onPress={() => navigation.navigate("RecipeList")}>
            <Text style={Style.buttonText}>레시피 업로드</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecipeUpload;
