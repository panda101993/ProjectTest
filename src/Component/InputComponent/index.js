import React from 'react';
import { Text, View, TextInput } from 'react-native';
import {styles} from './style';

export const TextInputComponent = (props) => {
    return (
        <View>
            <TextInput

                style={[styles.textInputStyle, props.textInputStyle]}
                placeholder={props.placeholder}
                placeholderTextColor="rgb(181 ,193, 201)"
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                ref={props.InputRef}
                onSubmitEditing={props.onSubmitEditing}
                maxLength={props.maxLength}
                editable={props.editable}
                returnKeyType={props.returnKeyType}
                multiline={props.multiline}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
            />
            <View
                style={[styles.ErrorView, props.MainContainer]}
            >
                <Text
                    numberOfLines={2}
                    style={[styles.ErrorText, props.ErrorText]}
                >
                    {props.ErrorText}
                </Text>

            </View>
        </View>
    )
}