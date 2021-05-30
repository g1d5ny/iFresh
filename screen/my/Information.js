import React, {useState, useEffect} from "react";
import {SafeAreaView, ScrollView, View, Text} from "react-native";

const Information = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
          <ScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View style={{margin: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'tway_air', fontSize: 11}}>☘식재료의 신선도와 레시피를 한번에 확인 할 수 있는 아이신선해 입니다.☘</Text>
              </View>
              <View style={{width: '95%', backgroundColor:"rgba(36, 197, 139, 0.2)", borderRadius:7, padding: 10, paddingBottom: 20}}>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>1. 카메라에 바코드를 인식하세요. 📸 ✨</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>2. 상품 이미지, 상품명, 바코드 번호, 구매일자는 자동으로 입력되니, 나머지는 직접 입력하세요. ✏️</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>3. 입력하신 유통기한을 바탕으로 알림을 띄워줘요. 🔔</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>4. 사용자 레시피는 위험 / 적정 / 신선으로 신선도 구분이 가능해요. 🌱</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>5. 원하는 레시피를 검색하여 오늘 한 끼 해결하세요! 🍛</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>6. 사용자가 레시피를 직접 쓰는 것도 가능해요. 📝</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>7. 사용자가 지출한 금액을 월별로 통계 낼 수 있어요. 📉</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>8. 사용자가 선호하는 범주를 월별로 확인할 수 있어요. 📊</Text>
                <Text style={{fontFamily: 'tway_air', fontSize: 13, marginTop: 10}}>9. 식재료의 신선도를 관리하여 올바른 식습관을 길러보아요. 🍱</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}
export default Information;
