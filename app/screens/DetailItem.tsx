import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { homeParam } from '../navigation/StackNavigation.tsx/HomeStack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getItemById } from '../networkCall/ApiCalls';
import ButtonComponent from '../components/ButtonComponent';
import rate from '../assets/rating.png';

type DetailsRouteProp = RouteProp<homeParam, 'DetailItem'>;

const DetailItem = () => {
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    getItem()
  }, [])

  const route = useRoute<DetailsRouteProp>();

  const getItem = async () => {
    const response = await getItemById("/products", route.params.id)
    setProduct(response.data)
  }

  const convertToIST = (utcDate :any) => {
    const date = new Date(utcDate);
    const offset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30, in milliseconds
    const istDate = new Date(date.getTime() + offset);
    return istDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 5, margin: 5 }}>
        {/* Product Images */}
        <View style={{ borderRadius: 10, borderWidth: 0.1, margin: 5 }}>
          <FlatList
            data={product?.images}
            horizontal={true}
            renderItem={({ item }) => (
              <Image source={{ uri: item.toString() }} resizeMode='contain' style={{ height: 250, width: 350, margin: 10 }} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* Product Title and Details */}
        <Text style={{ fontWeight: 'bold', fontSize: 28 }}>{product?.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={rate} style={{ width: 15, height: 15 }} />
            <Text style={{ padding: 2, fontWeight: 'bold' }}>{product?.rating} </Text>
            <Text style={{ fontWeight: 'bold' }}>({product?.reviews.length} Reviews) </Text>
          </View>
          <Text style={{ padding: 5, fontWeight: 'bold' }}>$ {product?.price} ({product?.stock} stock)</Text>
        </View>

        {/* Description */}
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Description</Text>
        <Text style={{ fontSize: 15, paddingTop: 10 }}>{product?.description}</Text>

        {/* Reviews */}
        <View style={{ paddingTop: 20, margin: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Reviews</Text>
          <View style={{ height: 1, backgroundColor: 'black', marginVertical: 10 }} />
          <FlatList
            data={product?.reviews}
            renderItem={({ item }) => (
              <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ padding: 3, fontWeight: 'bold' }}>{item.reviewerName}</Text>
                  <Text style={{ padding: 3, fontWeight: '200' }}>{convertToIST(item.date)}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                  <Image source={rate} style={{ width: 15, height: 15 }} />
                  <Text style={{ padding: 3, fontWeight: 'bold' }}>{item.rating}</Text>
                </View>
                <Text style={{ padding: 3 }}>{item.comment}</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginVertical: 10 }} />
              </>
            )}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false} // Disable scroll for FlatList inside ScrollView
          />
        </View>
      </ScrollView>

      {/* Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <ButtonComponent onPress={() => { }} title='Buy' backgroundColor='#90EE90' />
        <ButtonComponent onPress={() => { }} title='Cart' backgroundColor='#90EE90' />
      </View>
    </View>
  )
}

export default DetailItem;

const styles = StyleSheet.create({});
