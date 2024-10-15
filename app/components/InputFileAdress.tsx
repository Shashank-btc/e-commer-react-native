import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const InputFileAdress = ({label,value,onChangeText}:{
    label :String,
    value :String,
    onChangeText : (value : string)=>void
    }) => {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={label+""}
        value={value+""}
        onChangeText={onChangeText}
        outlineStyle ={styles.editField}
        cursorColor = {"black"}
        theme={{colors: {primary: 'black'}}}
      />
    </View>
  )
}

export default InputFileAdress

const styles = StyleSheet.create({
  container:{
    padding : 10,
  }, editField:{
    borderColor : 'black',
    color : 'red',
    backgroundColor: 'white', 
    borderRadius : 15,
  },back:{
    color: 'black'
  }
})