import React, { useState, useEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Style } from "../../styles/user/Style";
import * as ImagePicker from "react-native-image-picker";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const RecipeUpload = ({ navigation }) => {

  const [ingredients, setIngredients] = useState(0);
  const [way, setWay] = useState(0);
  const [img, setImg] = useState(3);
  const [imgFile, setImgFile] = useState([]);
  const [foodImgFile, setFoodImgFile] = useState();
  const [imgLoading, setImgLoading] = useState(false);
  const [imgCount, setImgCount] = useState(0); // 몇개인지.
  const [comFile, setComFile] = useState([]);// 담을거. 배열로?
  const [viewComFile, setViewComFile] = useState([]); // url 만 담을거.
  const [comFile2, setComFile2] = useState([]);// 담을거. 배열로?
  const [viewComFile2, setViewComFile2] = useState([]); // url 만 담을거.
  const [comFile3, setComFile3] = useState([]);// 담을거. 배열로?
  const [viewComFile3, setViewComFile3] = useState([]); // url 만 담을거.
  const [comFile4, setComFile4] = useState([]);// 담을거. 배열로?
  const [viewComFile4, setViewComFile4] = useState([]); // url 만 담을거.
  const [comFile5, setComFile5] = useState([]);// 담을거. 배열로?
  const [viewComFile5, setViewComFile5] = useState([]); // url 만 담을거.
  const [comFile6, setComFile6] = useState([]);// 담을거. 배열로?
  const [viewComFile6, setViewComFile6] = useState([]); // url 만 담을거.
  const [comFile7, setComFile7] = useState([]);// 담을거. 배열로?
  const [viewComFile7, setViewComFile7] = useState([]); // url 만 담을거.
  const [comFile8, setComFile8] = useState([]);// 담을거. 배열로?
  const [viewComFile8, setViewComFile8] = useState([]); // url 만 담을거.
  const [comFile9, setComFile9] = useState([]);// 담을거. 배열로?
  const [viewComFile9, setViewComFile9] = useState([]); // url 만 담을거.
  const [comFile10, setComFile10] = useState([]);// 담을거. 배열로?
  const [viewComFile10, setViewComFile10] = useState([]); // url 만 담을거.


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
            <TouchableOpacity style={{ flexDirection: "row" }}
                              onPress={() => ImagePicker.launchImageLibrary({
                                mediaType: "photo",
                                includeBase64: false,
                              }, (response => {
                                if (response.didCancel) {
                                  console.log("did cancel");
                                } else if (response.uri !== "") {
                                  setImgLoading(true);
                                  updatePhoto(response);
                                }
                              }))}>
              <View style={{
                width: "97%",
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                padding: 10,
              }}>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                  <Text style={[{
                    fontSize: 12, flex: 1,
                  }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>
                    {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile[i - 1].fileName.substr(0, 45) + "..."}
                  </Text>
                  <View>
                    <Image source={require("../../assets/icon_upload.png")} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {
            imgCount > 0 &&
            <View style={{
              width: "95%",
              height: 150,
              flexDirection: "row",
              // backgroundColor: '#afa',
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: 20,
              marginTop: 10,
            }}>
              <Image source={{ uri: viewComFile[i - 1] }}
                     onLoadEnd={e => setImgLoading(false)}
                     style={{ width: "100%", height: "100%", borderRadius: 10 }} />
            </View>
          }
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

  const updatePhoto = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile(comFile.concat(photo));
    setViewComFile(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile);
    console.log("=============");
  };

  const updatePhoto2 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile2(comFile2.concat(photo));
    setViewComFile2(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile2);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile2);
    console.log("=============");
  };

  const updatePhoto3 = (photo) => {
    setImgCount(prevState => prevState + 1);
    // setComFile3(comFile3.concat(photo));
    setViewComFile3(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile3);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile3);
    console.log("=============");
  };

  const updatePhoto4 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile4(comFile4.concat(photo));
    setViewComFile4(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile4);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile4);
    console.log("=============");
  };

  const updatePhoto5 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile5(comFile5.concat(photo));
    setViewComFile5(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile5);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile5);
    console.log("=============");
  };

  const updatePhoto6 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile6(comFile6.concat(photo));
    setViewComFile6(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile6);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile6);
    console.log("=============");
  };

  const updatePhoto7 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile7(comFile7.concat(photo));
    setViewComFile7(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile7);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile7);
    console.log("=============");
  };

  const updatePhoto8 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile8(comFile8.concat(photo));
    setViewComFile8(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile8);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile8);
    console.log("=============");
  };

  const updatePhoto9 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile9(comFile9.concat(photo));
    setViewComFile9(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile9);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile9);
    console.log("=============");
  };

  const updatePhoto10 = (photo) => {
    setImgCount(prevState => prevState + 1);
    setComFile10(comFile10.concat(photo));
    setViewComFile10(prevState => [...prevState, photo.assets[0].uri]);
    console.log(viewComFile10);
    console.log("update");
    console.log(photo);
    // console.log(photo.assets[0].fileName);
    console.log(imgCount);
    console.log(comFile10);
    console.log("=============");
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
                }}
                                  onPress={() => ImagePicker.launchImageLibrary(
                                    {
                                      mediaType: "photo",
                                      includeBase64: false,
                                    }, (response) => {
                                      console.log("response: " + response);
                                      if (response.didCancel) {
                                        console.log("cancel");
                                      } else if (response != "") {
                                        console.log("response.assets[0].uri: " + response.assets[0].uri);
                                        setFoodImgFile(response.assets[0].uri);
                                      }
                                    },
                                  )}
                >
                  {
                    foodImgFile === "" || foodImgFile === undefined ?
                      <Image source={require("../../assets/icon_empty.png")}
                             style={{ width: 40, height: 40, borderRadius: 10 }} />
                      :
                      <Image source={{ uri: foodImgFile }}
                             style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                  }
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
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {1}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile.length === 0 ? "이미지를 업로드해주세요." : viewComFile}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {2}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto2(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile2.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile2.length === 0 ? "이미지를 업로드해주세요." : viewComFile2}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile2.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile2.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {3}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto3(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile3.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile3.length === 0 ? "이미지를 업로드해주세요." : viewComFile3}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile3.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile3.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {4}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto4(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile4.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile4.length === 0 ? "이미지를 업로드해주세요." : viewComFile4}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile4.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile4.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {5}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto5(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile5.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile5.length === 0 ? "이미지를 업로드해주세요." : viewComFile5}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile5.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile5.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {6}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto6(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile6.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile6.length === 0 ? "이미지를 업로드해주세요." : viewComFile6}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile6.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile6.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {7}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto7(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile7.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile7.length === 0 ? "이미지를 업로드해주세요." : viewComFile7}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile7.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile7.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {8}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto8(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile8.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile8.length === 0 ? "이미지를 업로드해주세요." : viewComFile8}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile8.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile8.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {9}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto9(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile9.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile5.length === 0 ? "이미지를 업로드해주세요." : viewComFile9}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile9.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile9.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            <View style={{ width: "100%" }}>
              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {10}. </Text>
                <TouchableOpacity style={{ flexDirection: "row" }}
                                  onPress={() => ImagePicker.launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                  }, (response => {
                                    if (response.didCancel) {
                                      console.log("did cancel");
                                    } else if (response.uri !== "") {
                                      setImgLoading(true);
                                      updatePhoto10(response);
                                    }
                                  }))}>
                  <View style={{
                    width: "97%",
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    padding: 10,
                  }}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                      <Text style={[{
                        fontSize: 12, flex: 1,
                      }, viewComFile10.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}
                            numberOfLines={1}>
                        {viewComFile10.length === 0 ? "이미지를 업로드해주세요." : viewComFile10}
                      </Text>
                      <View>
                        <Image source={require("../../assets/icon_upload.png")} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {
                viewComFile10.length !== 0 &&
                <View style={{
                  width: "95%",
                  height: 150,
                  flexDirection: "row",
                  // backgroundColor: '#afa',
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                  <Image source={{ uri: viewComFile10.toString() }}
                         onLoadEnd={e => setImgLoading(false)}
                         style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
              }
              <View style={{
                width: "97%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginLeft: 20,
              }}>
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
            </View>
            {/*{*/}
            {/*  cookWay()*/}
            {/*}*/}
            {/*{*/}
            {/*  way > 0 && (*/}
            {/*    <View style={{ width: "100%" }}>*/}
            {/*      {*/}
            {/*        [...Array(way)].map(((n, index) => (*/}
            {/*          <>*/}
            {/*            <View style={{*/}
            {/*              width: "100%",*/}
            {/*              flexDirection: "row",*/}
            {/*              alignItems: "center",*/}
            {/*              justifyContent: "space-between",*/}
            {/*              marginTop: 20,*/}
            {/*            }} key={index.toString()}>*/}
            {/*              {*/}
            {/*                index !== 3 ? (*/}
            {/*                  <Text style={{ fontSize: 14, fontFamily: "tway_air" }}> {index + 7}. </Text>*/}
            {/*                ) : (*/}
            {/*                  <Text style={{ fontSize: 14, fontFamily: "tway_air" }}>{index + 7}. </Text>*/}
            {/*                )*/}
            {/*              }*/}
            {/*              <TouchableOpacity style={{ flexDirection: "row" }}*/}
            {/*                                onPress={() => ImagePicker.launchImageLibrary({*/}
            {/*                                  mediaType: "photo",*/}
            {/*                                  includeBase64: false,*/}
            {/*                                }, (response => {*/}
            {/*                                  if (response.didCancel) {*/}
            {/*                                    console.log("did cancel");*/}
            {/*                                  } else if (response.uri !== "") {*/}
            {/*                                    setImgLoading(true);*/}
            {/*                                    updatePhoto(response);*/}
            {/*                                  }*/}
            {/*                                }))}>*/}
            {/*                <View style={{*/}
            {/*                  width: "97%",*/}
            {/*                  height: 35,*/}
            {/*                  borderWidth: 1,*/}
            {/*                  borderColor: "#C4C4C4",*/}
            {/*                  borderRadius: 7,*/}
            {/*                  padding: 10,*/}
            {/*                }}>*/}
            {/*                  <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>*/}
            {/*                    <Text style={[{*/}
            {/*                      fontSize: 12, flex: 1,*/}
            {/*                    }, imgFile.length === 0 ? { color: "#CCCED6" } : { color: "#000" }]}>*/}
            {/*                      {imgFile.length === 0 ? "이미지를 업로드해주세요." : imgFile.fileName.substr(0, 45) + "..."}*/}
            {/*                    </Text>*/}
            {/*                    <View>*/}
            {/*                      <Image source={require("../../assets/icon_upload.png")} />*/}
            {/*                    </View>*/}
            {/*                  </View>*/}
            {/*                </View>*/}
            {/*              </TouchableOpacity>*/}
            {/*            </View>*/}
            {/*            <View style={{*/}
            {/*              width: "97%",*/}
            {/*              flexDirection: "row",*/}
            {/*              alignItems: "center",*/}
            {/*              justifyContent: "space-between",*/}
            {/*              marginTop: 10,*/}
            {/*            }}>*/}
            {/*              /!*{*!/*/}
            {/*              /!*  index !== 3 ? (*!/*/}
            {/*              /!*    <Text*!/*/}
            {/*              /!*      style={{ fontSize: 14, fontFamily: "tway_air", color: "white" }}> {index + 7}. </Text>*!/*/}
            {/*              /!*  ) : (*!/*/}
            {/*              /!*    <Text*!/*/}
            {/*              /!*      style={{ fontSize: 14, fontFamily: "tway_air", color: "white" }}>{index + 7}. </Text>*!/*/}
            {/*              /!*  )*!/*/}
            {/*              /!*}*!/*/}
            {/*              <TextInput*/}
            {/*                style={{*/}
            {/*                  width: "97%",*/}
            {/*                  height: 35,*/}
            {/*                  borderWidth: 1,*/}
            {/*                  borderColor: "#C4C4C4",*/}
            {/*                  borderRadius: 7,*/}
            {/*                  justifyContent: "flex-end",*/}
            {/*                  padding: 10,*/}
            {/*                  alignSelf: "center",*/}
            {/*                }}*/}
            {/*              />*/}
            {/*            </View>*/}
            {/*          </>*/}
            {/*        )))*/}
            {/*      }*/}
            {/*    </View>*/}
            {/*  )*/}
            {/*}*/}
          </View>
          {/*{*/}
          {/*  testFunction2(way, setWay)*/}
          {/*}*/}
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
