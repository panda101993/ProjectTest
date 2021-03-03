import React,{useState,useEffect} from 'react'
import { View, Text, FlatList} from 'react-native'
import {styles} from './styles';
import { useDispatch,useSelector} from "react-redux";
import { fetchEmpDetails } from "../../redux/actions/empDetails.actions";

export default function Home() {
  // const [data, setData] = useState([]);

  const dispatch = useDispatch();

  // const empDetais = useSelector((state) => 
  // console.log("gettingState==>",state)
  // state.empDetais);

  const empDetails = useSelector((state) =>{
    console.log("gettingState==>>",state.empDetails)
    return state.empDetails
  });
  
  // const data = [
  //   { id: '1', title: 'First item' },
  //   { id: '2', title: 'Second item' },
  //   { id: '3', title: 'Third item' },
  //   { id: '4', title: 'Fourth item' }
  // ];

useEffect(() => {
  // fetchData();
  dispatch(fetchEmpDetails(empDetails));
 
}, []);

// const fetchData = () => {
//   fetch('http://dummy.restapiexample.com/api/v1/employees')
//   .then((res) => res.json())
//   .then((resJson) => {
//     // console.log("fetchingData==>>",resJson.data); 
//     setData(resJson.data)
//   })
//   .catch((e )=> {
//     console.log("errorr==>",e)
//   })
// }

// fetch('http://dummy.restapiexample.com/api/v1/employees')
// .then(res => response.json())
// .then(results => {
//   setData(results);
//   setIsLoading(false);
// })
// .catch(err => {  
//   setIsLoading(false);
//   setError(err);
// });
// }, []);

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Employee Details</Text>
    <FlatList
      data={empDetails}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.listItemText}>Employee Name</Text>
          <Text style={styles.listItemText}>:</Text>
          <Text style={styles.listItemText}>{item.employee_name}</Text>
          </View>
          <Text style={styles.listItemText}>Employee Age : {item.employee_age}</Text>
          <Text style={styles.listItemText}>Employee salary : {item.employee_salary}</Text>
        </View>
      )}
    />
  </View>
  )
}
