import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput, Image} from "react-native";
import { Style } from "../../styles/user/Style";
import { MyStyle } from "../../styles/user/my/MyStyle";
import {screenWidth} from "../../styles/DimenStyle";
import { ImageSlider } from "../../component/ItemComponent";

const MyPage = ({ navigation }) => {
  const [advertise, setAdvertise] = useState([
    require('../../assets/img_advertise.png'),
    require('../../assets/img_advertise2.jpeg'),
    require('../../assets/img_advertise3.jpeg'),
  ]);
  return (
        <SafeAreaView style={Style.background}>
          {/*<ScrollView>*/}
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View style={MyStyle.box}>
                <TouchableOpacity style={styles.listView}
                                  onPress={() => navigation.navigate('MyEdit')}>
                  <Text style={styles.list}>사용자 정보</Text>
                  <Image source={require('../../assets/icon_bracket.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listView}
                                  onPress={() => navigation.navigate('MyRecipe')}>
                  <Text style={styles.list}>마이 레시피</Text>
                  <Image source={require('../../assets/icon_bracket.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listView}
                                  onPress={() => navigation.navigate('WishRecipe')}>
                  <Text style={styles.list}>위시 레시피</Text>
                  <Image source={require('../../assets/icon_bracket.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listView}
                                  onPress={() => navigation.navigate('Information')}>
                  <Text style={styles.list}>이용 안내</Text>
                  <Image source={require('../../assets/icon_bracket.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listView}
                                  onPress={() => navigation.navigate('Withdrawal')}>
                  <Text style={styles.list}>회원 탈퇴</Text>
                  <Image source={require('../../assets/icon_bracket.png')} />
                </TouchableOpacity>
              </View>
              <View style={MyStyle.logoutView}>
                <Text style={MyStyle.logoutText}>로그아웃</Text>
              </View>
              <View style={MyStyle.advertise}>
                <ImageSlider data={[
                  {id: 0, image: require('../../assets/img_advertise.png')},
                  {id: 1, image: require('../../assets/img_advertise2.jpeg')},
                  {id: 2, image: require('../../assets/img_advertise3.jpeg')},
                ]} width={screenWidth} height={220}/>
                {/*<Image source={require('../../assets/img_advertise.png')} style={{width: '100%', height: 100}}/>*/}
              </View>
            </View>
          {/*</ScrollView>*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  listView: {
    width: '87%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    // paddingTop: 12,
    height: 50,
  },
  list: {
    fontFamily: 'tway_air',
    fontSize: 14
  }
})

export default MyPage;
