import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { db } from '../../firebase';
import styles from '../../styles/components/restaurantList.style';

export default function Restaurant() {

    
    const [restaurant, setRestaurant] = useState([]);
    const restaurants = [];

    useEffect(() => {
        const fetch = async () => {
            const docRef = collection(db, "restaurant");
            const docSnap = await getDocs(docRef);
            docSnap.forEach((doc) => {
                restaurants.push({ ...doc.data(), id: doc.id })
            })
            setRestaurant(restaurants)
        }
        fetch();
    }, [])

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
        <FlatList
            style={{ height: '100%'}}
            data={restaurant}
            numColumns={1}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {item})}>
                    <View style={styles.mainContainer}>
                        <Image source={{ uri: item.restaurantImg }} style={styles.image} />
                        <View style={styles.containerText}>
                            <Text style={styles.h1}>{item.restaurantName}</Text>
                            <Text style={styles.h2}>{item.type} stall</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
        </View>
    );
}