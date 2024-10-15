import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import InputFileAdress from '../components/InputFileAdress'
import ButtonComponent from '../components/ButtonComponent'

const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <InputFileAdress label={"house No/Flat"} onChangeText={()=>{}} value={""}/>
      <InputFileAdress label={"primary addres"} onChangeText={()=>{}} value={""}/>
      <InputFileAdress label={"Secondary adress"} onChangeText={()=>{}} value={""}/>
      <InputFileAdress label={"city"} onChangeText={()=>{}} value={""}/>
      <InputFileAdress label={"pin code"} onChangeText={()=>{}} value={""}/>
      <ButtonComponent title='submit' onPress={()=>{}}/>
    </View>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
  container:{
    flex : 1,
    padding: 5,
    backgroundColor : '#ecfef2'
  }
})