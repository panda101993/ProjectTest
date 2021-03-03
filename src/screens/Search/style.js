import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
container: {
    flex: 1,
  },
inputBoxView:{
    marginTop:30,
    height:40,
    width:"100%",
    backgroundColor:"yellow",
    justifyContent:"center",
    borderRadius:20,
    borderWidth:1,
    borderColor:"gray"
},
textStyle1:{
   color:"gray",
   paddingLeft:15,
},

//*****modal style*****//

centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22
  },
  modalView: {
      height:"100%",
      width:"100%",
    // margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
  inputBoxView1:{
    marginTop:30,
    height:40,
    width:"100%",
    backgroundColor:"pink",
    justifyContent:"center",
    position:"absolute",
    bottom:0,
    borderRadius:20,
    borderWidth:1,
    borderColor:"gray"
},
textInputStyle:{
    height:40,
    width:"100%",
    paddingLeft:15,
},
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});