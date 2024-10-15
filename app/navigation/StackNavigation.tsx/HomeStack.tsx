import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import DetailItem from '../../screens/DetailItem'


export type  homeParam={
    Home : undefined,
    DetailItem : {id : number},
}
const HomeStack = () => {
    const stack = createNativeStackNavigator()
  return (
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} options={{headerShown : false}}/>
        <stack.Screen name='DetailItem' component={DetailItem} options={{headerShown : true , }}/>
      </stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})