import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator} from "react-native";
import useInterval from "../hooks/useInterval";

export const ImageSlider = ({data, width, height}) => {
  const scrollRef = useRef();
  const [active, setActive] = useState(0);

  useEffect(() => {
    scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: width * active,
    });
  }, [active]);

  /**
   * Import useInterval Custom Hooks
   */
  useInterval(() => {
    setActive(prev => ((prev >= (data.length - 1)) ? 0 : (prev + 1)));
  }, 5000);

  const setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);

    if (selectedIndex !== active) {
      setActive(selectedIndex);
    }
  };
  // console.log(data);
  return (
    <View>
      <ScrollView
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={1}
        style={{width, height}}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelectedIndex}
        ref={scrollRef}
      >
        {/*{data === undefined || data.length === 0 ? (*/}
        {/*  <View style={{width, flex: 1, alignItems: 'center', justifyContent: 'center'}}>*/}
        {/*    <Text>dd</Text>*/}
        {/*    <ActivityIndicator color={'#000'}/>*/}
        {/*  </View>*/}
        {/*) : (*/}
        {
          data.map((item, index) => (
            <View key={index.toString()} style={{flexDirection: 'row'}}>
              <Image source={require('../assets/img_advertise.png')} style={{width, height}} />
              <Image source={require('../assets/img_advertise2.jpeg')} style={{width, height}} />
              <Image source={require('../assets/img_advertise3.jpeg')} style={{width, height}} />
            </View>
          ))
        }
        {/*)*/}
        {/*}*/}
      </ScrollView>
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 4, alignSelf: 'center'}}>
        {
          data.map((i, k) => (
            <Text key={k}
                  style={k === active ? [{
                    fontSize: 7,
                    color: '#292841',
                    margin: 3,
                  }] : [{
                    fontSize: 7,
                    color: '#F1F1F3',
                    margin: 3,
                  }]}>⬤</Text>
          ))
        }
      </View>
    </View>
  )
};
