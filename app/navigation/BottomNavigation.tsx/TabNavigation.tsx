import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import Cart from '../../screens/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from '../StackNavigation.tsx/HomeStack';
import ProfileStack from '../ProfileStack';
import { auth } from '../../fireBase/firebaseConfig';


// export type TabParamList= {
//     HomeStack : undefined
//     Cart : undefined
//     Profile : undefined

//   };
const TabNavigation = () => {
    const Tab =createBottomTabNavigator();

  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="HomeStack" 
      component={HomeStack} 
      options={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        // Conditionally hide tab bar if the user is on the 'Details' screen
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (routeName === 'DetailItem') {
            return { display: 'none' }; // Hide the tab bar on 'Details' screen
          }
          return {};
        })(route),
      })}
    />
        { auth.currentUser?.displayName != null && <Tab.Screen name='Cart' component={Cart} 
           options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
          }}
        />}
        <Tab.Screen name='Profile' component={ProfileStack} 
           options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        
    </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})