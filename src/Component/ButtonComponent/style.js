import { StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    MainButtonContainer: {
        height:  wp('12%'),
        width:  wp('30%'),
        backgroundColor: 'rgb(49,176,249)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: wp('10%'),
        alignSelf: 'center',
    },

    ButtonText: {
    
        fontWeight: '700',
        color:'#ffffff',
      
    },
})
