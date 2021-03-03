import { StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    textInputStyle: {
        alignSelf: "center",
        width: wp("76%"),
        height: hp("6%"),
        borderWidth:1,
        borderRadius:25,
        borderColor:"gray",
        backgroundColor:'white',
        paddingLeft:20       
    },
    ErrorView:{
        alignSelf:"center", 
        width: wp("76%"),
         height: hp("2.5%"),
         
        //  backgroundColor:'yellow'

    },
    ErrorText:{
        color: "red",
    },
})
