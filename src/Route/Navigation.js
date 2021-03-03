import React from 'react'
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator,} from '@react-navigation/stack';
import Search from '../screens/Search/index';
import Auto from '../screens/Auto/index';
import Login from '../screens/Login/index';
import Signup from '../screens/Signup/index';
import InstagramButton from '../screens/InstagramButton/index';
import MyFlatlist from '../screens/flatlist/MyFlatlist';

const authStack = createStackNavigator();

function MyStack() {
  return (
    <authStack.Navigator
      initialRouteName="MyFlatlist"
       screenOptions={{
         headerShown: false, 
 
       }}
      >
      <authStack.Screen 
        name="Login" 
        component={Login} 
        options={
           {headerShown: false}
        }
      />       
      <authStack.Screen 
        name="Signup" 
        component={Signup} 
        options={
          {headerShown: false} 
        }
      />
       <authStack.Screen 
        name="InstagramButton" 
        component={InstagramButton} 
        options={
          {headerShown: false} 
        }
      />
            <authStack.Screen 
        name="MyFlatlist" 
        component={MyFlatlist} 
        options={
          {headerShown: false} 
        }
      />
    

    </authStack.Navigator>
  );
}


// const Tab = createBottomTabNavigator()
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//     </Tab.Navigator>
//   );
// }


// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//       <Drawer.Navigator>
//       <Drawer.Screen name="Dashboard"  component={MyTabs}/>
      
            
//       </Drawer.Navigator>
//   );
// }


export default function Navigation() {
  return (
    <NavigationContainer>
<MyStack/>      
    </NavigationContainer>
  );
}
