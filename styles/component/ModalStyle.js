import {StyleSheet} from "react-native"

export const ModalStyle = StyleSheet.create({
  modalView: {
    flex:1, alignItems: 'center', justifyContent: 'center'
  },
  modalInView: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    padding: 12,
    justifyContent: 'center'
  },
  modalInTextView: {
    flex:1, justifyContent: 'center'
  },
  modalText:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
  modalTouchView: {
    alignItems: 'flex-end', justifyContent: 'flex-end',
  },
  modalTouch: {
    width: 60,
    height: 33,
    backgroundColor: '#7E5FF9',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalTouchText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
