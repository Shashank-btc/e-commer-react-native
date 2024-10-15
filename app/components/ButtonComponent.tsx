import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComponent = ({title, onPress,backgroundColor,fontSize} : {title : string,
    onPress : ()=>void,
    backgroundColor? : string,
    fontSize? :number
}) => {
  return (
    <View style={{flex :1}}>
      <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor || '#B9DEEA' }]} onPress={onPress}>
        <Text style={[styles.text,{fontSize : fontSize || 20}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button:{
        backgroundColor : '#B9DEEA',
        padding : 10,
        borderRadius : 20,
        margin : 15,
        marginTop : 20,
        borderWidth: 2
    },
    text:{
        alignSelf : 'center',
        fontSize : 20,
        fontWeight: 'bold',
    }
})