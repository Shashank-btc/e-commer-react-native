import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screen } from 'react-native-screens'
import ChangePassword from '../screens/ChangePassword'
import AddressScreen from '../screens/AddressScreen'
import Profile from '../screens/Profile'


export type ProfileStackParamList = {
  ProfileScreen: undefined;   // No params needed
  ChangePassword: undefined;  // No params needed
  Address: undefined;   // No params needed, but you can add params if needed
};

const ProfileStack = () => {
    const ProfileStack = createNativeStackNavigator<ProfileStackParamList>()
  return (
    <ProfileStack.Navigator screenOptions={{headerShown : false}} initialRouteName='ProfileScreen'>
        <ProfileStack.Screen name='ProfileScreen' component={Profile}/>
        <ProfileStack.Screen name='ChangePassword' component={ChangePassword} options={{headerShown : true}}/>
        <ProfileStack.Screen name='Address' component={AddressScreen} options={{headerShown : true}}/>
    </ProfileStack.Navigator>
    
  )
}

export default ProfileStack

const styles = StyleSheet.create({})