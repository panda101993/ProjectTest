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
      width:"90%",
      maxHeight:260,
      position:"absolute",
      bottom:50
  },
  inputBoxView1:{
      flexDirection:"row",
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
    width:"80%",
    paddingLeft:15,
},
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    width:"20%",
    height:40,
    justifyContent:"center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  //***flatlist style ***//
  container1: {
    flex: 1,
    // backgroundColor:"red"
  },
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
  },
  listItemText: {
    fontSize: 18,
    fontWeight:"700"
  }

});