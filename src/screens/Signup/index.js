import React from 'react'
import { View, Text, ImageBackground, ScrollView, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { Images } from '../../AppConstants/ImageConstants';
import { styles } from './style';
import { TextInputComponent } from '../../Component/InputComponent/index';
import { SubmitButton } from '../../Component/ButtonComponent/index';
 
export default function Signup(props) {
    return (
        <View >
            <ImageBackground source={Images.loginBackground2} style={styles.backgroundImage}>
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>
                        REGISTER
                        </Text>
                </View>
                {/* <KeyboardAvoidingView
                   behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
                <ScrollView>
                <View style={styles.mainContainer}>
                    
                    <View style={styles.inputBoxView}>
                    <TextInputComponent
                                    placeholder="Name*"
                                    // textInputStyle={styles.inputBoxView}
                                    // value={phoneNumber}
                                    // onChangeText={(text) => this.handleTextInput(text, "phoneNumber")}
                                    // ErrorText={this.state.phoneNumberError}
                                    // textCon={{ borderBottomColor: this.state.activephoneNumberBorderError ? "red" : "white" }}
                                    returnKeyType="next"
                                    // InputRef={(input) => this.phoneNumber = input}
                                    // onSubmitEditing={() => { this.password.focus(); }}
                                    // keyboardType="numeric"
                                    // maxLength={56}
                                />
                    </View>
                    <View style={styles.inputBoxView}>
                    <TextInputComponent
                                    placeholder="Email Id*"
                                    // textInputStyle={styles.inputBoxView}
                                    // value={phoneNumber}
                                    // onChangeText={(text) => this.handleTextInput(text, "phoneNumber")}
                                    // ErrorText={this.state.phoneNumberError}
                                    // textCon={{ borderBottomColor: this.state.activephoneNumberBorderError ? "red" : "white" }}
                                    returnKeyType="next"
                                    // InputRef={(input) => this.phoneNumber = input}
                                    // onSubmitEditing={() => { this.password.focus(); }}
                                    // keyboardType="numeric"
                                    // maxLength={56}
                                    // secureTextEntry={true}
                                />
                    </View>
                    <View style={styles.inputBoxView}>
                    <TextInputComponent
                                    placeholder="Mobile Number*"
                                    // textInputStyle={styles.inputBoxView}
                                    // value={phoneNumber}
                                    // onChangeText={(text) => this.handleTextInput(text, "phoneNumber")}
                                    // ErrorText={this.state.phoneNumberError}
                                    // textCon={{ borderBottomColor: this.state.activephoneNumberBorderError ? "red" : "white" }}
                                    returnKeyType="next"
                                    // InputRef={(input) => this.phoneNumber = input}
                                    // onSubmitEditing={() => { this.password.focus(); }}
                                    keyboardType="numeric"
                                    maxLength={10}
                                    // secureTextEntry={true}
                                />
                    </View>
                    <View style={styles.inputBoxView}>
                    <TextInputComponent
                                    placeholder="Choose Password*"
                                    // textInputStyle={styles.inputBoxView}
                                    // value={phoneNumber}
                                    // onChangeText={(text) => this.handleTextInput(text, "phoneNumber")}
                                    // ErrorText={this.state.phoneNumberError}
                                    // textCon={{ borderBottomColor: this.state.activephoneNumberBorderError ? "red" : "white" }}
                                    returnKeyType="next"
                                    // InputRef={(input) => this.phoneNumber = input}
                                    // onSubmitEditing={() => { this.password.focus(); }}
                                    // keyboardType="numeric"
                                    // maxLength={10}
                                    // secureTextEntry={true}
                                />
                    </View>
                    <View style={styles.inputBoxView}>
                    <TextInputComponent
                                    placeholder="Confirm Password*"
                                    // textInputStyle={styles.inputBoxView}
                                    // value={phoneNumber}
                                    // onChangeText={(text) => this.handleTextInput(text, "phoneNumber")}
                                    // ErrorText={this.state.phoneNumberError}
                                    // textCon={{ borderBottomColor: this.state.activephoneNumberBorderError ? "red" : "white" }}
                                    returnKeyType="next"
                                    // InputRef={(input) => this.phoneNumber = input}
                                    // onSubmitEditing={() => { this.password.focus(); }}
                                    // keyboardType="numeric"
                                    // maxLength={10}
                                    // secureTextEntry={true}
                                />
                    </View>
                    
                    <View>
                    <SubmitButton
                                ButtonText={{fontSize:18}}
                                    Size={"medium"}
                                    ButtonName="S I G N  U P"
                                    // submitOnpress={() => this.handleSubmit()}
                                />
                    </View>
                    <View style={{flexDirection:"row",alignSelf:"center"}}>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
                            <Text style={styles.signupText}>
                             LogIn
                            </Text>
                            </TouchableOpacity>
                    </View>

                    
                </View>
                </ScrollView>
                {/* </KeyboardAvoidingView> */}
            </ImageBackground>

        </View>
    )
}
