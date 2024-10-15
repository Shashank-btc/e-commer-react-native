import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EditTextComponent from '../components/EditTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../fireBase/firebaseConfig'

const ForgotPassword = () => {
  const [email,setEmail] = useState("")

  const ForgotPassword = ()=>{
    sendPasswordResetEmail(auth,email).then(()=>{
      alert("email sent")
    }).catch((error)=>{
      console.log("error "+error)
      alert(error)
    })
  }
  return (
      <View style={styles.container}>
        <ScrollView style={{justifyContent:'space-between'}}>
        <View style={{paddingTop : 40}}>
          <EditTextComponent isPassword={false} onChangeText={(value) =>{setEmail(value)}} placeHolder='Email' value={email}  label='Enter Email'/>
          </View>
          <View style={{flex:1, justifyContent:'flex-end'}}>
            <ButtonComponent title='Submit' onPress={ForgotPassword}/>
            </View>
            </ScrollView>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container :{
        flex : 1,
        padding : 10,
        backgroundColor : '#67B7D1',
        borderRadius : 20,
         justifyContent: 'space-between'
    }
})