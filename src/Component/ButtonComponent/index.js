import React from 'react'
import {Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './style';

export const SubmitButton = (props) =>{
    let standardSize = props.Size === "medium" ? wp('65%') : props.Size === "small" ? wp('40%') : wp('30%')
    return(
      <TouchableOpacity
      disabled={props.disabled}
          onPress={props.submitOnpress}
         style={[styles.MainButtonContainer,
            {
                height: standardSize ? standardSize / 5.2 : wp('12%'),
                width: standardSize ? standardSize : wp('72%'),
               
                
            },props.MainButtonContainer
            ]}
            >

            <Text style={[styles.ButtonText,
                {
                    fontSize: standardSize ? standardSize / 15: wp('6%'),
                },props.ButtonText
                ]}>
                    {props.ButtonName ? props.ButtonName : 'SUBMIT'}
                </Text>
                </TouchableOpacity>

      

    )
}
