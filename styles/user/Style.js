import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#24C58B",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: 'bold',
    fontFamily: 'tway_air',
  },
  InputView: {
    marginTop: 20,
    alignSelf: 'center'
  },
  textInput: {
    width: 300,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DCDBE6",
    marginTop: 10
  },
  textInputGray: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#F4F5F8",
    marginTop: 10,
    // alignItems: 'flex-start'
    // justifyContent: 'flex-start'
  },
  title: {
    fontSize: 13,
    fontFamily: 'tway_air',
    fontWeight: 'bold'
  },
  content: {
    fontSize: 11,
    fontFamily: 'tway_air',
    // fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 12
  },
  editButton: {
    width: 145,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#56ABEE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteButton: {
    width: 145,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#FF5A43',
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    fontFamily: "tway_air",
    fontWeight: "bold",
    fontSize: 15,
  },
  background: {
    backgroundColor: "rgba(36,197,135,0.07)",
    flex: 1
  }
})
