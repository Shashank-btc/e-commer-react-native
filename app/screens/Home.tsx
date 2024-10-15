import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image, Text } from 'react-native-elements';
import HomeItem from '../components/HomeItem';
import { getCategoryByCategory, getCategoryList, getItemList } from '../networkCall/ApiCalls';
import { homeParam } from '../navigation/StackNavigation.tsx/HomeStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface HomeRouteProp { 
  navigation :NativeStackNavigationProp<homeParam, 'Home'>}

const Home = ({navigation} : HomeRouteProp) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [selected, setSelected] = useState<String>("");
  useEffect(() => {
    const fetchProducts = async () =>{
      try{
        const response = await getItemList('/products')
        setProducts(response.data.products)
      } catch(err){
        console.error('Error fetching products:', err);
      }
    }
    getCatagery();
    fetchProducts();
  }, []);

  const getCatagery = async()=>{
    try{
    const res = await getCategoryList('/products/category-list')
    // console.log("resp "+res.data)
    setCategoryList(res.data)
  }catch(err){
    console.error('Error fetching products:', err);
  }
}


  const navigateToDetails = (id : number)=>{
    navigation.navigate("DetailItem",{
      id : id
    })
  }

  const filter= async(val :String)=>{
    const listCata = await getCategoryByCategory("/products/category/"+val)

    setSelected(val);
    setProducts(listCata.data.products)
  }


  return (
    <View style={styles.container}>
      <View style={{padding: 5}}>
      <FlatList
      data={categoryList}
      horizontal = {true}
      renderItem={({item})=>(
        // <View style={{borderWidth: 1,margin: 3, borderRadius: 10}}>
        <Text
        style={[
          styles.text,
          selected === item && styles.selectedText, // Apply highlight if selected
        ]}
        onPress={() => filter(item)}
      >
        {item}
      </Text>
        // </View>
  )}
      keyExtractor={(item,index) => index.toString()}
      />
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigateToDetails(item.id)}>
          <HomeItem
          id={item.id}
          image={{ uri: item.thumbnail }} 
           title={item.title}
           price={item.price}
          />
      </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        numColumns={2} // Show items in two columns
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 10,
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100, // Set a fixed height for images
    borderRadius: 5,
  },
  text: {
    borderWidth: 1,
    margin: 3,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
  },
  selectedText: {
    backgroundColor: '#90EE90', // Highlight color (you can change it)
   },
});
