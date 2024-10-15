import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'
import icon from '../assets/splashscreen.png'
import { ImageSource } from 'react-native-vector-icons/Icon'

const HomeItem = (
    { id, image, title, price }: {
        id: number
        image?: ImageSource,
        title?: string,
        price?: number
    }
) => {
    // console.log(title)
    return (
        <View style={styles.containe}>
            <Image source={image} style={styles.image} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 , alignItems: 'center'}}>
                <View>
                    <Text numberOfLines={2} style={{ fontWeight: 'bold', maxWidth: 85, maxHeight: 50 }}>{title}</Text>
                    <Text numberOfLines={2} style={{ fontWeight: 'bold', maxWidth: 85, maxHeight: 50 }}>$ {price}</Text>
                </View>
                <Icon name="add" type="ionicon" color="black" style={{ backgroundColor: '#90EE90', borderRadius: 30 }} />
            </View>
        </View>
    )
}

export default HomeItem

const styles = StyleSheet.create({
    containe: {
        padding: 5,
        margin: 5,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 20,
        backgroundColor: '#ecfef2',
        flexDirection: 'column',
        alignSelf: 'flex-start', // Container will adjust width based on content
        maxWidth: 300, // Optional to set a maximum width relative to the parent container

    }, image: {
        width: 150,
        height: 150,
        borderRadius: 20,
    }
})