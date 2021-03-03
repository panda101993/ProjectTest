import React, { useState,useEffect,useRef } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Modal,TextInput,InteractionManager,Keyboard } from 'react-native'
import {styles} from './style';

export default function Search(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const inputRef = useRef(null);

 
    // useEffect(() => {
    //     // Must run after animations for keyboard to automatically open
    //     InteractionManager.runAfterInteractions(() => {
    //       if (inputRef?.current) {
    //         inputRef.current.focus();
    //       }
    //     });
    //   }, [inputRef]);
    // const _keyboardDidShow = () => {
    //     alert("Keyboard Shown");
    //   };

    // const openKeyboard = ()=>{
    //         console.log("inputRef111==",inputRef)
    //         console.log("inputRef.current===",inputRef.current)
    //     console.log("inputRef111==",inputRef)
    //     console.log("inputRef.current===",inputRef.current)
    //     setModalVisible(true)
    //     InteractionManager.runAfterInteractions(() => {
    //         if (inputRef?.current) {
    //           inputRef.current.focus();
              
    //         }
    //       });
    //     // inputRef.cuurent.focus()
    // }
    // useEffect(() => {
    //     Keyboard.addListener("keyboardDidShow", _keyboardDidShow);;
    
    //     // cleanup function
    //     return () => {
    //       Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
    //     };
    //   }, []);
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={() => props.navigation.navigate('Auto')}>
           <View style={styles.inputBoxView}>
                <Text style={styles.textStyle1}>comment here</Text>
            </View>
           </TouchableOpacity>


           {/* <View style={styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.inputBoxView1}>
                <TextInput
                // onFocus={() => openKeyboard2}
                style={styles.textInputStyle}
                placeholder="comment here"
                placeholderTextColor="gray"
                autoFocus={true}
                ref={inputRef}
                >

                </TextInput>
            </View>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View> */}
        </View>
    )
}
