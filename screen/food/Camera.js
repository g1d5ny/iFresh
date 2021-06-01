import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { CameraScreen } from 'react-native-camera-kit';

const Camera = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C4C4C4" }}>
      <View>
        {/*<CameraScreen*/}
        {/*  actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}*/}
        {/*  onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}*/}
        {/*  // flashImages={{*/}
        {/*  //   // optional, images for flash state*/}
        {/*  //   on: require('path/to/image'),*/}
        {/*  //   off: require('path/to/image'),*/}
        {/*  //   auto: require('path/to/image'),*/}
        {/*  // }}*/}
        {/*  // cameraFlipImage={require('path/to/image')} // optional, image for flipping camera button*/}
        {/*  // captureButtonImage={require('path/to/image')} // optional, image capture button*/}
        {/*  // torchOnImage={require('path/to/image')} // optional, image for toggling on flash light*/}
        {/*  // torchOffImage={require('path/to/image')} // optional, image for toggling off flash light*/}
        {/*  hideControls={false} // (default false) optional, hides camera controls*/}
        {/*  showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session*/}
        {/*  // Barcode props*/}
        {/*  scanBarcode={true}*/}
        {/*  onReadCode={(event) => Alert.alert('QR code found')} // optional*/}
        {/*  showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen*/}
        {/*  laserColor='red' // (default red) optional, color of laser in scanner frame*/}
        {/*  frameColor='white' // (default white) optional, color of border of scanner frame*/}
        {/*/>*/}

      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}>
        <View style={{
          marginTop: 10,
          width: "95%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
          <Image source={require("../../assets/icon_settings.png")} />
          <Image source={require("../../assets/icon_flash_off.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <Image source={require("../../assets/icon_close.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../../assets/icon_barcode.png")}
                 style={{ width: 200, height: 160 }} />
        </View>
        <View style={{
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('ProductAdd')}>
            <Image source={require("../../assets/icon_camera_button.png")} />
          </TouchableOpacity>
        </View>
        <Image source={require("../../assets/icon_camera_reverse.png")}
               style={{ position: "absolute", bottom: 20, right: 15 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export { Camera };
