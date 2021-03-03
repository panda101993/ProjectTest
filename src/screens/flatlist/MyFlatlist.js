// import React, { Component } from 'react';  
// import { AppRegistry, FlatList,  
//     StyleSheet, Text, View,Alert } from 'react-native';  
  
// export default class MyFlatlist extends Component {  
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             isRefresh: false,
//              data:[  
//                 {id:1,
//                 content: 'Android'},
//                 {id:2,
//                     content: 'iOS'}, 
//                 {id:3,
//                     content: 'Java'},
//                 {id:4,
//                     content: 'Swift'},  
//                 {id:5,
//                     content: 'Php'},
//                 {id:6,
//                     content: 'Hadoop'},
//                 {id:7, content: 'Sap'},                      
//                 {id:8, content: 'Python'},                  
//                 {id:9, content: 'Ajax'}, 
//                 {id:10, content: 'C++'},  
//                 {id:11, content: 'Ruby'},
//                 {id:12, content: 'Rails'},
//                 {id:13, content: '.Net'},  
//                 {id:14, content: 'Perl'},
//                 {id:15, content: 'Sap'},
//             ]
//         }
//     }
    
// onRefresh ()  {
// console.log("refreshhhhh",this.state.data)
// if (this.state.isRefresh == false){
// this.setState({isRefresh : true})
// this.setState({data:this.state.data.slice(-5)})
// this.setState({isRefresh : false})
// }

//     }
  
//     renderSeparator = () => {  
//         return (  
//             <View  
//                 style={{  
//                     height: 1,  
//                     width: "100%",  
//                     backgroundColor: "#000",  
//                 }}  
//             />  
//         );  
//     };  
//     //handling onPress action  
//     getListViewItem = (item) => {  
//         Alert.alert(item.content);  
//     }  
  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <FlatList  
//                     onRefresh={() => this.onRefresh()}
//                     refreshing={this.state.isRefresh}
//                     keyExtractor={(item, index) => item.id}
//                     data={this.state.data}  
//                     renderItem={({item}) =>  
//                         <Text style={styles.item}  
//                               onPress={this.getListViewItem.bind(this, item)}>{item.content}</Text>}  
//                     ItemSeparatorComponent={this.renderSeparator}  
//                 />  
//             </View>  
//         );  
//     }  
// }  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//     },  
//     item: {  
//         padding: 10,  
//         fontSize: 18,  
//         height: 44,  
//     },  
// })  
  


import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';



let stopFetchMore = true;



// let arr = [];
// for (let i = 1; i < 300; i++) {
//   arr.push(`Item no: ${i}`);
// }

let arr = [  
                    {id:1,
                    content: 'Android'},
                    {id:2,
                        content: 'iOS'}, 
                    {id:3,
                        content: 'Java'},
                    {id:4,
                        content: 'Swift'},  
                    {id:5,
                        content: 'Php'},
                    {id:6,
                        content: 'Hadoop'},
                    {id:7, content: 'Sap'},                      
                    {id:8, content: 'Python'},                  
                    {id:9, content: 'Ajax'}, 
                    {id:10, content: 'C++'},  
                    {id:11, content: 'Ruby'},
                    {id:12, content: 'Rails'},
                    {id:13, content: '.Net'},  
                    {id:14, content: 'Perl'},
                    {id:15, content: 'Sap'},
                    {id:16,
                        content: 'Android'},
                        {id:17,
                            content: 'iOS'}, 
                        {id:18,
                            content: 'Java'},
                        {id:19,
                            content: 'Swift'},  
                        {id:20,
                            content: 'Php'},
                        {id:21,
                            content: 'Hadoop'},
                        {id:22, content: 'Sap'},                      
                        {id:23, content: 'Python'},                  
                        {id:24, content: 'Ajax'}, 
                        {id:25, content: 'A'},  
                        {id:26, content: 'B'},
                        {id:27, content: 'C'},
                        {id:28, content: 'D'},  
                        {id:29, content: 'E'},
                        {id:30, content: 'F'},
                ]

let lastItem = '';

const fakeServer = qty =>
  new Promise((resolve, reject) => {
    let newArr;
    const lastItemIndex = arr.lastIndexOf(lastItem);
    // const lastItemIndex = arr.indexOf(lastItem);
    console.log("lastItemIndex+++",lastItemIndex)
    if (lastItemIndex === arr.length - 1) return resolve('done');

    if (!lastItem) {
    //   newArr = [...arr].slice(0, qty);
      newArr = [...arr].slice(-qty);
      console.log("newArrnewArr",newArr)
    //   lastItem = [...newArr].pop();
      lastItem = [...newArr].shift();
      console.log("lastItem++++++++",lastItem)
      console.log("[...newArr].pop()+++++++",[...newArr].shift())
    } else {
      const newIndex = arr.lastIndexOf(lastItem);
    //   const newIndex = arr.indexOf(lastItem) + 1;
      console.log("newIndex+++",newIndex)
    //   newArr = [...arr].slice(newIndex, qty + newIndex);
      newArr = [...arr].slice(newIndex - qty, newIndex);
    //   lastItem = [...newArr].pop();
      lastItem = [...newArr].shift();
      console.log("lastItem--------",lastItem)
      console.log("[...newArr].pop()--------",[...newArr].shift())
    }
    setTimeout(() => {
      resolve(newArr);
    }, 1000);
  });


export default function MyFlatlist() {
  const [data, setData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);

 const fetchData = async () => {
 const response = await fakeServer(6);
 console.log("response9999",response)
    setData([...response]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnEndReached = async () => {
    setLoadingMore(true);
    if (!stopFetchMore) {
      const response = await fakeServer(6);
 console.log("response2222",response)
      if (response === 'done') return setLoadingMore(false);
      setData([...data, ...response]);
      stopFetchMore = true;
    }
    setLoadingMore(false);
  };

  const renderItem = ({ item }) => {
    console.log("itemmmmm",item)
  return (
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 55,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
      }}
    >
      {item.content}
    </Text>
  );
};

// const ListFooterComponent = () => (
//     <Text
//       style={{
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: 5,
//       }}
//     >
//       Loading...
//     </Text>
//   );


  return (
    <FlatList
      data={data}
      keyExtractor={item => item}
      renderItem={renderItem}
      onRefresh={handleOnEndReached}
      refreshing={loadingMore}
    //   onEndReached={handleOnEndReached}
      onEndReachedThreshold={0.5}
      onScrollBeginDrag={() => {
      stopFetchMore = false;
      }}
    //   ListFooterComponent={() => loadingMore && <ListFooterComponent />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 



