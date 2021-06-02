import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Style } from "../../styles/user/Style";
import Modal from "react-native-modal";
import { ModalStyle } from "../../styles/component/ModalStyle";

const RecipeDetail = ({ route, navigation }) => {
  const ingredient = route.params.data.ingredient;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [like, setLike] = useState(route.params.data.like);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2);
  };
console.log(route.params.data);
  console.log(route.params.data.ingredient);
  // {
  //   ingredient.map((index, item) => (
  //       console.log(ingredient[index].amount)
  //   ));
  // }
  // console.log(ingredient[0].amount)
  // console.log(ingredientName.values());
  return (
    <SafeAreaView style={Style.background}>
      <ScrollView>
        <View>
          <View style={{ marginTop: 20, backgroundColor: "#fff" }}>
            <View style={{ width: "90%", height: 170, flexDirection: "row" }}>
              <View style={{ width: 150, height: "100%", alignItems: "center", justifyContent: "center" }}>
                <Image source={route.params.data.photo} style={{ width: 130, height: 130, borderRadius: 10 }} />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <View>
                  <Text style={{ fontFamily: "tway_air", fontSize: 14 }}>레시피이름</Text>
                  <View style={{
                    width: 200,
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    marginTop: 10,
                    justifyContent: "center",
                    padding: 10,
                  }}>
                    <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{route.params.data.name}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontFamily: "tway_air", fontSize: 14, marginTop: 10 }}>글쓴이</Text>
                  <View style={{
                    width: 200,
                    height: 35,
                    borderWidth: 1,
                    borderColor: "#C4C4C4",
                    borderRadius: 7,
                    marginTop: 10,
                    justifyContent: "center",
                    padding: 10,
                  }}>
                    <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{route.params.data.author}</Text>
                  </View>
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
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{route.params.data.time}분</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>4인분</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center", height: 600 }}>
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
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[0].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[0].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[1].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[1].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[2].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[2].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[3].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[3].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[4].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[4].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[5].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[5].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[6].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[6].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[7].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[7].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[8].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[8].amount}</Text>
              </View>
            </View>
            <View style={{
              width: "90%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[9].name}</Text>
              </View>
              <View style={{
                width: 170,
                height: 35,
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 7,
                justifyContent: "center",
                padding: 10,
              }}>
                <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>{ingredient[9].amount}</Text>
              </View>
            </View>

          </View>
          <View style={{ marginTop: 20, backgroundColor: "#fff", alignItems: "center" }}>
            <View style={{
              width: "90%",
              height: 1100,
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
                  <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>배추김치, 돼지고기, 양파를 잘게 썬다.</Text>
                </View>
              </View>
              <View style={{ width: "95%", height: 200, marginTop: 10, marginLeft: 18 }}>
                <Image source={require("../../assets/img_kimchi1.png")}
                       style={{ width: "100%", height: "100%", borderRadius: 7 }} />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>2. </Text>
                <View style={{
                  width: "95%",
                  height: 65,
                  borderWidth: 1,
                  borderColor: "#C4C4C4",
                  borderRadius: 7,
                  marginTop: 10,
                  justifyContent: "center",
                  padding: 10,
                }}>
                  <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>팬에 식용유를 두르고 센 불에서 양파와 돼지고기를 볶다가 재료가 익으면 중간 불로
                    줄이고 김치, 간장과 설탕을 넣고 숨이 죽을 때까지 약 3분간 더 볶는다.</Text>
                </View>
              </View>
              <View style={{ width: "95%", height: 200, marginTop: 10 }}>
                <Image source={require("../../assets/img_kimchi2.png")}
                       style={{ width: "100%", height: "100%", borderRadius: 7, marginLeft: 18 }} />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ marginTop: 10, fontSize: 14, fontFamily: "tway_air" }}>3. </Text>
                <View style={{
                  width: "95%",
                  height: 50,
                  borderWidth: 1,
                  borderColor: "#C4C4C4",
                  borderRadius: 7,
                  marginTop: 10,
                  justifyContent: "center",
                  padding: 10,
                }}>
                  <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>밥을 넣고 센 불에서 볶다가 불을 끄고 참기름을 두른 후, 잘 섞는다.</Text>
                </View>
              </View>
              <View style={{ width: "95%", height: 200, marginTop: 10 }}>
                <Image source={require("../../assets/img_kimchi3.png")}
                       style={{ width: "100%", height: "100%", borderRadius: 7, marginLeft: 18 }} />
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
                  <Text style={{ fontSize: 13, fontFamily: "tway_air" }}>계란후라이를 김치볶음밥에 올리고 다진 쪽파를 뿌려 낸다.</Text>
                </View>
              </View>
              <View style={{ width: "95%", height: 200, marginTop: 10 }}>
                <Image source={require("../../assets/img_kimchi4.png")}
                       style={{ width: "100%", height: "100%", borderRadius: 7, marginLeft: 18 }} />
              </View>
            </View>
            <View style={{
              width: "78%",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 20,
            }}>
              <TouchableOpacity style={{
                width: 140, height: 40, backgroundColor: "rgba(32, 151, 246, 0.9)", borderRadius: 7,
                alignItems: "center", justifyContent: "center",
              }}
                                onPress={() => toggleModal()}>
                <Text style={{ color: "#fff", textSize: 12, fontFamily: "tway_air" }}>레시피 수정</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: 140, height: 40, backgroundColor: "#FF5A43", borderRadius: 7,
                alignItems: "center", justifyContent: "center",
              }}
                                onPress={() => toggleModal2()}>
                <Text style={{ color: "#fff", textSize: 12, fontFamily: "tway_air" }}>레시피 삭제</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            width: 300,
            height: 90,
            borderRadius: 7,
            alignSelf: "center",
            backgroundColor: "#fff",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}>
            <Text style={{ color: "#BEC0CB", fontSize: 12 }}>해당 레시피가 도움이 되었다면 좋아요를 눌러주세요.</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Image source={require("../../assets/icon_heart_red.png")}
                       style={{ width: 25, height: 25, marginTop: 20 }} />
              </TouchableOpacity>
              <Text style={{
                marginLeft: 10,
                marginTop: 20,
                fontSize: 20,
                color: "#FF2E2E",
                fontFamily: "tway_air",
              }}>{like}</Text>
            </View>
          </View>
        </View>

        <Modal isVisible={modalVisible}
               useNativeDriver={true}
               hideModalContentWhileAnimating={true}
               onBackdropPress={() => modalVisible(false)}>
          <View style={ModalStyle.modalView}>
            <View style={ModalStyle.modalInView}>
              <View style={ModalStyle.modalInTextView}>
                <Text style={ModalStyle.modalText}>수정되었습니다.</Text>
              </View>
              <View style={ModalStyle.modalTouchView}>
                <TouchableOpacity
                  style={ModalStyle.modalTouch}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={ModalStyle.modalTouchText}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal isVisible={modalVisible2}
               useNativeDriver={true}
               hideModalContentWhileAnimating={true}
               onBackdropPress={() => modalVisible2(false)}>
          <View style={ModalStyle.modalView}>
            <View style={ModalStyle.modalInView}>
              <View style={ModalStyle.modalInTextView}>
                <Text style={ModalStyle.modalText}>삭제되었습니다.</Text>
              </View>
              <View style={ModalStyle.modalTouchView}>
                <TouchableOpacity
                  style={ModalStyle.modalTouch}
                  onPress={() => {
                    setModalVisible2(!modalVisible2);
                    navigation.navigate("RecipeList");
                  }}
                >
                  <Text style={ModalStyle.modalTouchText}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecipeDetail;
