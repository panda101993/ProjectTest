import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    backgroundImage:{
        height:"100%",
        width:"100%",
        // justifyContent:"center"
    },
    headingView:{
        marginTop:100,
        alignSelf:"center"
    },
    headingText:{
        fontSize:25,
        color:"white",
        fontWeight:"700"

    },
    mainContainer:{
        marginTop:20,
        width: wp("85%"),
        height: hp("55%"),
        backgroundColor:"white",
        alignSelf:"center",
        borderRadius:20,
    },
    inputBoxView:{
        alignSelf:"center",
        marginTop:30,
        width: wp("76%"),
        height: hp("6%"),
        borderRadius:25,
        backgroundColor:"red",
        borderColor:"green",
        borderWidth:3
    },
    forgotText:{
        color:"rgb(49,176,249)",
        fontSize:15,
        
    },
    signupText:{
        color:"rgb(49,176,249)",
        fontWeight:"700"   
    }
  
})
