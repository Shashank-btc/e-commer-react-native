import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import image from '../assets/splashscreen.png'
import { auth } from '../fireBase/firebaseConfig'
import { Icon } from 'react-native-elements';
import ButtonComponent from '../components/ButtonComponent';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '../navigation/StackNavigation.tsx/NavigationType';
import Login from './Login';
import SingUp from './SingUp';

const Profile = () => {
var userData = auth.currentUser
const navigation = useNavigation<StackNavigationProps>();

const logout = ()=>{

  signOut(auth).then(()=>{
    navigation.navigate("Login")
  }).catch((error)=>{
    console.log("sign out "+error)
  })
}
const cart = ()=>{
  navigation.navigate("Cart")
}
const signIn = ()=>{
  navigation.navigate("Login")
}
const singUp = ()=>{
  navigation.navigate("SignUp")
}
const changePassword = ()=>{
  navigation.navigate('ProfileStack',{ screen :'ChangePassword'})
}
const Address = ()=>{
  navigation.navigate('ProfileStack',{ screen :'Address'})
}



  return (
    // <>
    // {(auth.currentUser == null) ? (<>
    //   <View>
      
    //   </View>
    //   </> ):(<>
        <ScrollView contentContainerStyle={{ flex:1,justifyContent: 'space-between',backgroundColor : '#ecfef2'}}>
        <View style={styles.constainer}>
          {(auth.currentUser == null) ?
          (<View style={{flex:1,justifyContent : 'center'}}>
          <TouchableOpacity style={styles.section} onPress={cart}>
        <Text style={styles.text}>
          Cart
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={signIn}>
        <Text style={styles.text}>
         Sign in
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={singUp}>
        <Text style={styles.text}>
         Sign Up
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
          </View>
        ) :(<>
        <View style={styles.image}>
          <Image source={image} style={{width: 150, height: 150, borderRadius: 75}} resizeMode='stretch' />
        </View>
      <View style={[styles.section, styles.border]}>
        <Text style={styles.text}>
          {userData?.displayName}
        </Text>
        {/* <Icon name="chevron-forward" type="ionicon" color="#808080"/> */}
        </View>
      <TouchableOpacity style={styles.section} onPress={changePassword}>
        <Text style={styles.text}>
          Change Password
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={Address}>
        <Text style={styles.text}>
        Address
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={cart}>
        <Text style={styles.text}>
        cart
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={()=>{}}>
        <Text style={styles.text}>
        orders
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </TouchableOpacity>
        </>)}
        </View>
        {auth.currentUser !=null && <View style={styles.button}>
            <ButtonComponent title='Logout' onPress={logout}/>
            </View>}
      </ScrollView>
//       </>)
// }
//       </>
      
  )
}

export default Profile

const styles = StyleSheet.create({
  constainer:{
    flex :1,
    padding : 20,
    paddingTop : 80,
  },
  image:{
    alignItems : 'center',
    borderRadius: 75,
    justifyContent : "center",
    borderWidth: 2,
    padding : 2,
    // backgroundColor : 'red',
    // borderColor : 'green',
    alignSelf : 'center',
  },
  section :{
    flexDirection : 'row',
    padding : 10,
    borderRadius : 15,
    borderWidth : 2,
    justifyContent : 'space-between',
    margin : 10,
  },text:{
    fontSize : 22,
    fontWeight : 'bold',
    fontStyle: 'italic',
  },button:{
    // backgroundColor : 'red',
  },
  border:{
    borderWidth: 0,
    justifyContent : 'center'
  }
})