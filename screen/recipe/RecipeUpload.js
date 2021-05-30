import React, { useState, useEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Style } from "../../styles/user/Style";
import * as ImagePicker from "react-native-image-picker/src";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const RecipeUpload = () => {

  const [test, setTest] = useState(3);
  const [img, setImg] = useState(3);
  const [imgFile, setImgFile] = useState([]);
  const [imgLoading, setImgLoading] = useState(false);

  console.log("test: " + test);
  console.log("img: " + img);
  return (
    <SafeAreaView style={Style.background}>
      <ScrollView>
        <View>
          <View style={{ marginTop: 20, backgroundColor: "#fff" }}>
            <View style={{ width: "90%", height: 170, flexDirection: "row" }}>
              <View style={{ width: 150, height: "100%", alignItems: "center", justifyContent: "center" }}>
                <View style={{
                  backgroundColor: "#F4F5F8",
                  width: 120,
                  height: 120,
                  borderRadius: 7,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image source={require("../../assets/icon_empty.png")}
                         style={{ width: 40, height: 40, borderRadius: 10 }} />
                </View>
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
                  }}
                             placeholder={"레시피이름"} />
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
                  {/*  <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{route.params.data.author}</Text>*/}
                  {/*</TextInput>*/}
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center", height: 115 }}>
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
                <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>글쓴이</Text>
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
          <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center", height: 830 }}>
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
            </View>
            {
              test > 3 && (
                <View style={{
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  {
                    [...Array(test)].map(((n, index) => (
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
            {test >= 10 ? (
              <TouchableOpacity style={{
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: 35,
                marginTop: 20,
                borderColor: "#C4C4C4",
                borderWidth: 1,
                backgroundColor: "#F4F5F8",
                borderRadius: 7,
              }} onPress={() => setTest(test - 1)}>
                <Image source={require("../../assets/icon_minus.png")} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            ) : (
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
              }} onPress={() => setTest(test + 1)}>
                <Image source={require("../../assets/icon_plus_gray.png")} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            )}
          </View>

        </View>
        <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center" }}>
          <View style={{
            width: "90%",
            height: 455,
            marginTop: 20,
          }}>
            <Text style={{ fontSize: 14, fontFamily: "tway_air" }}>조리 방법</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>1. </Text>
              <View style={{
                width: "95%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                marginTop: 10,
                justifyContent: "center",
                padding: 10,
              }}>
                <TouchableOpacity style={{
                  width: "100%", flexDirection: "row", alignItems: "center",

                }}>
                  <Text style={[{
                    fontSize: 10, flex: 1,
                  }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                    {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                  </Text>
                  <View style={{ marginLeft: 8 }}>
                    <Image source={require("../../assets/icon_upload.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>2. </Text>
              <View style={{
                width: "95%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                marginTop: 10,
                justifyContent: "center",
                padding: 10,
              }}>
                <TouchableOpacity style={{
                  width: "100%", flexDirection: "row", alignItems: "center",

                }}>
                  <Text style={[{
                    fontSize: 10, flex: 1,
                  }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                    {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                  </Text>
                  <View style={{ marginLeft: 8 }}>
                    <Image source={require("../../assets/icon_upload.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>3. </Text>
              <View style={{
                width: "95%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                marginTop: 10,
                justifyContent: "center",
                padding: 10,
              }}>
                <TouchableOpacity style={{
                  width: "100%", flexDirection: "row", alignItems: "center",
                }}>
                  <Text style={[{
                    fontSize: 10, flex: 1,
                  }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                    {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                  </Text>
                  <View style={{ marginLeft: 8 }}>
                    <Image source={require("../../assets/icon_upload.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>4. </Text>
              <View style={{
                width: "95%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                marginTop: 10,
                justifyContent: "center",
                padding: 10,
              }}>
                <TouchableOpacity style={{
                  width: "100%", flexDirection: "row", alignItems: "center",

                }}>
                  <Text style={[{
                    fontSize: 10, flex: 1,
                  }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                    {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                  </Text>
                  <View style={{ marginLeft: 8 }}>
                    <Image source={require("../../assets/icon_upload.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {
              img > 3 && (
                <View style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  {
                    [...Array(img)].map(((n, index) => (
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                            key={index.toString()}>
                        <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>{index + 5}. </Text>
                        <View style={{
                          width: "95%",
                          height: 35,
                          borderWidth: 1,
                          borderColor: "#C4C4C4",
                          borderRadius: 7,
                          marginTop: 10,
                          justifyContent: "center",
                          padding: 10,
                        }}>
                          <TouchableOpacity style={{
                            width: "100%", flexDirection: "row", alignItems: "center",
                          }}>
                            <Text style={[{
                              fontSize: 10, flex: 1,
                            }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                              {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}
                            </Text>
                            <View style={{ marginLeft: 8 }}>
                              <Image source={require("../../assets/icon_upload.png")} />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )))
                  }
                </View>
              )
            }
            {img >= 10 ? (
              <TouchableOpacity style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 35,
                marginTop: 20,
                borderColor: "#C4C4C4",
                borderWidth: 1,
                backgroundColor: "#F4F5F8",
                borderRadius: 7,
              }} onPress={() => setImg(img - 1)}>
                <Image source={require("../../assets/icon_minus.png")} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 35,
                borderColor: "#C4C4C4",
                borderWidth: 1,
                backgroundColor: "#F4F5F8",
                borderRadius: 7,
                marginTop: 20,
              }} onPress={() => setImg(img + 1)}>
                <Image source={require("../../assets/icon_plus_gray.png")} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', margin: 40}}>
          <TouchableOpacity style={Style.button}>
            <Text style={Style.buttonText}>레시피 업로드</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecipeUpload;
