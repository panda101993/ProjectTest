import React,{useState} from 'react'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Images } from '../../AppConstants/ImageConstants';
import { styles } from './style';
import { TextInputComponent } from '../../Component/InputComponent/index';
import { SubmitButton } from '../../Component/ButtonComponent/index';




export default function Login(props) {
    
const [color,setColor] = useState("gray")

const colorChange = () => {
if (color=="gray"){
    setColor("red")
} 
else{
    setColor("gray")
}
}

    return (
        <View >
            <ImageBackground source={Images.loginBackground2} style={styles.backgroundImage}>
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>
                        LOGIN
                        </Text>
                </View>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={{ marginVertical: 20 }}>
                            <View style={[styles.inputBoxView,{borderColor:color}]}>
                                <TextInputComponent
                                // textInputStyle={{borderColor: 'red'}}
                                    // InputRef={ref =>  (this.emailRef = ref)}
                                    // InputRef={ref => (this.emailRef = ref)}
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
                                    onFocus={() => colorChange()}
                                    onBlur={() => colorChange()}
                                    // onBlur={() => this.emailRef.setNativeProps({ style: { borderColor: 'gray' } })}
                                    // onFocus={() => this.emailRef.setNativeProps({ style: { borderColor: 'green' } })}
                                />
                            </View>
                            <View style={styles.inputBoxView}>
                                <TextInputComponent
                                    placeholder="Password*"
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
                                    secureTextEntry={true}
                                />
                            </View>
                            <View>
                                <SubmitButton
                                    ButtonText={{ fontSize: 18 }}
                                    Size={"medium"}
                                    ButtonName="S I G N  I N"
                                    submitOnpress={() => props.navigation.navigate('InstagramButton')}
                                />
                            </View>
                            <View style={{ alignSelf: "center" }}>
                                <TouchableOpacity>
                                    <Text style={styles.forgotText}>Forgot Password</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
                                <Text>Don't have an account ? </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                                    <Text style={styles.signupText}>
                                        SignUp
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </ImageBackground>

        </View>
    )
}
