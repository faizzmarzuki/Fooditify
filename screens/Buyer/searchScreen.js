import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import styles from '../../styles/screens/Buyer/searchScreen.style'
import styles2 from '../../styles/components/restaurantList.style';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen(){
    const [restaurant, setRestaurant] = useState([]);
    const [search, setSearch] = useState([]);
    const restaurants = [];

    const Search = async() =>{
        const fetch = async () => {
            const docRef = collection(db, "restaurant");
            const qq = query(docRef, where("searchName", "==", search.toLowerCase() ))
            const docSnap = await getDocs(qq);
            docSnap.forEach((doc) => {
                restaurants.push({ ...doc.data(), id: doc.id })
            })
            setRestaurant(restaurants)
        }
        fetch();
    }
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.h1}>Search for Restaurant</Text>
            </View>
            <View style={styles.viewContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder={'Search'} 
                    value={search}
                    onChangeText={text => setSearch(text)}
                />
                <TouchableOpacity style={styles.button} onPress={Search}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ height: '100%' }}
                    data={restaurant}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
                            <View style={styles2.mainContainer}>
                                <Image source={{ uri: item.restaurantImg }} style={styles.image} />
                                <View style={styles.containerText}>
                                    <Text style={styles2.h1}>{item.restaurantName}</Text>
                                    <Text style={styles2.h2}>{item.type} stall</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}