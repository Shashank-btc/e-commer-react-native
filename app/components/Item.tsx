import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, Image } from 'react-native-elements'
import icon from '../assets/splashscreen.png'
import ButtonComponent from './ButtonComponent'



const Item = () => {
  const [noOfItems, setNoOfItems] = useState(1)
  const [price, setPrice] = useState(200)
  const basePrice = 200

  useEffect(() => {
    if (noOfItems !== 0)
      calPrice()
  }, [noOfItems])

  const calPrice = () => {
    setPrice(basePrice * noOfItems)
  }
  const increase = () => {
    setNoOfItems(prv => prv + 1)
  }
  const decrease = () => {
    if (noOfItems !== 0) {
      setNoOfItems(prv => prv - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={icon} style={styles.image} />
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
          <View style={{ padding: 10 , justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold'}}>Watch</Text>
            <Text style={{fontWeight: '200'}}>Brand</Text>
            <Text style={{fontWeight: 'bold'}}>$ price</Text>
          </View>
          <View style={{justifyContent:'space-between'}}>
            <TouchableOpacity onPress={decrease} style={{ alignSelf: 'flex-end' }}>
              <Icon name="trash" type="ionicon" color="red" style={{ padding: 10, }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'  }}>
              <TouchableOpacity onPress={increase}>
                <Icon name="add" type="ionicon" color="black" style={{ backgroundColor: '#90EE90', borderRadius: 15 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, padding: 5, }}>{noOfItems}</Text>
              <TouchableOpacity onPress={decrease}>
                <Icon name="remove" type="ionicon" color="black" style={{ backgroundColor: '#90EE90', borderRadius: 15 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: '#ecfef2'
  }, image: {
    width: 100,
    height: 100,
    padding: 4,
    borderRadius: 10
  }
})





