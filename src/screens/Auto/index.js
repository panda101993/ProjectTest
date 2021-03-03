import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, TextInput, InteractionManager, KeyboardAvoidingView, FlatList, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Search from '../Search';
import { styles } from './style';

export default function Auto(props) {
  const [text2, setText2] = useState('hello')
  const inputRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const [text1,setText] = useState("")
  const [count, setCount] = useState(0);


  const data = [
    { id: '1', username: 'First item', },
    { id: '2', username: 'Second item' },
    { id: '3', username: 'Third item' },
    { id: '4', username: 'Fourth item' },
    { id: '5', username: 'Fifth item', },
    { id: '6', username: 'Sixth item' },
    { id: '7', username: 'Seventh item' },
    { id: '8', username: 'Eighth item' },
    { id: '9', username: 'Ninth item', },
    { id: '10', username: 'Tenth item' },
    { id: '11', username: 'Eleventh item' },
    { id: '12', username: 'Twelveth item' },
    { id: '13', username: 'Thirtheenth item', },
    { id: '14', username: 'Fourteenth item' },
  ];
  const handleInputFocus = () => setTimeout(() => {
    setInputFocused(true);
  }, 500);
  const handleInputBlur = () => setTimeout(() => {
    setInputFocused(true);
  }, 500);

  const userDetails = (userId, userName, text) => {
    console.log("userId==", userId)
    console.log("userName==", userName)
    setModalVisible(false)

    
  }

  const search = (text) => {
    console.log("search==", text)
    console.log("text.charAt(text.length-1==", text.charAt(text.length-1))
    // let splitData = text.split('@')
    // console.log("splitData",splitData)
    // console.log("splitData2",splitData[splitData.length-1])
    // let popData = splitData.pop()
    // console.log("splitData1",splitData)
    
    
   setText2(text)
    

    if (text.length !== 0 && text.charAt(text.length-1)=='@') {
      setModalVisible(true)
      // setInputFocused(true)
      
    }


    
  }
  const renderList = () => {
    
    return (
      <View style={styles.container1}>
        <Modal
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalView}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <TouchableOpacity onPress={() => userDetails(item.id, item.username)}>
                    <Text style={styles.listItemText}>{item.username}</Text>
                  </TouchableOpacity>
                </View>
                
              )}
            />
             <View style={{ flex: 1, marginTop: 22 }}>
             <TextInput autoFocus={true} 
          
          onChangeText={(text)=>setText(text)}
          placeholder="Autofocus to keep the keyboard" style={{display: 'none'}} />
          {/* <Button title={'hide modal'} onPress={() => setshowingModal(false)} /> */}
        </View>
          </View>
          
        </Modal>
      </View>
    )
  }

  useEffect(() => {
    // Must run after animations for keyboard to automatically open
    InteractionManager.runAfterInteractions(() => {
      if (inputRef?.current) {
        inputRef.current.focus();
      }
    });
  }, [inputRef]);

  // useEffect(() => {
  //   isInputFocused ? inputRef.current.focus() : inputRef.current.blur();
  // }, [isInputFocused]);
  return (
    <View style={styles.centeredView}>

      <View>
        {renderList()}
      </View>
      <View style={styles.inputBoxView1}>
        <TextInput
          style={styles.textInputStyle}
          value={text2+text1}
          onChangeText={(text) => search(text)}
          placeholder="comment here"
          placeholderTextColor="gray"
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        >

        </TextInput>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => props.navigation.navigate('Search')}
        >
          <Text style={styles.textStyle}>Hide</Text>
        </TouchableHighlight>
      </View>



    </View>

  )
}


// import * as React from 'react';
// import {
//   Button,
//   Modal,
//   Text,
//   TextInput,
//   View,
//   Keyboard,
//   ScrollView,
// } from 'react-native';

// export default function Auto() {
//   const [showingModal, setshowingModal] = React.useState(false);
//   const [text,setText] = React.useState("")

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 }}>
//       <Modal
//         visible={showingModal}
//         transparent
//         onRequestClose={() => setshowingModal(false)}>
//         <View style={{ flex: 1, marginTop: 22 }}>
//           <TextInput autoFocus={true} 
          
//           onChangeText={(text)=>setText(text)}
//           placeholder="Autofocus to keep the keyboard" style={{display: 'none'}} />
//           <Button title={'hide modal'} onPress={() => setshowingModal(false)} />
//         </View>
//       </Modal>

//       <TextInput 
//       value={text}
//       placeholder="Focus to show keyboard" 
//       onChangeText={(text)=>setText(text)} />
//       <Button title={'Show modal'} onPress={() => setshowingModal(true)} />
//     </View>
//   );
// }
