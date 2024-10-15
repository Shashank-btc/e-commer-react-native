import { ScrollView, StyleSheet, Text, View } from 'react-native'
import icon from '../assets/splashscreen.png'

import React from 'react'
import Item from '../components/Item'
import ButtonComponent from '../components/ButtonComponent'

const Cart = () => {
  return (
    <View style={{ flex: 1,}}>
      <ScrollView style={{
        flex: 1, paddingTop: 10,
        padding: 10, maxHeight: '60%', margin: 2
      }}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
      <View style={{ backgroundColor: '#FFFFFF', flex: 1, padding: 10, margin: 2, borderTopEndRadius: 30, borderTopStartRadius: 30, alignContent: 'flex-end', }}>
        <Text style={{fontWeight: 'bold',padding: 10, fontSize: 20}}>Order Summary</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text>items</Text>
          <Text>3</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text>Subtotal</Text>
          <Text>$ 3</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text>Discount</Text>
          <Text>$ 3</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text>Delivery Charges</Text>
          <Text>$ 3</Text>
        </View>
        <View style={{ height: 1, backgroundColor: 'black', marginVertical: 10 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>Total</Text>
          <Text>$ 3</Text>
        </View>
        <ButtonComponent onPress={() => { }} title='Check Out' fontSize={15} />
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})