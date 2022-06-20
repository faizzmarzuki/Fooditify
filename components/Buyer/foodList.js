import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { db } from '../../firebase'
import styles from '../../styles/components/foodList.style'

export default function FoodList({route}){
    
    const [menu, setMenu] = useState([]);
    const menus = [];

    useEffect(() => {
        const fetch = async () => {
            const docRef = collection(db, "restaurant", route.params.item.id, "menus");
            const docSnap = await getDocs(docRef);
            docSnap.forEach((doc) => {
                menus.push({ ...doc.data(), id: doc.id })
            })
            setMenu(menus)
        }
        fetch();
    }, [])

    return(
        <View>
            <Text style={styles.h1}>Menu</Text>
            <FlatList
                style={{height: '100%'}}
                data={menu}
                numColumns={1}
                renderItem={({menuItem}) => (
                    <TouchableOpacity style={styles.containerButton}>
                            <Image source={{uri: menuItem.imgUri}} style={styles.image} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.foodName}>{menuItem.menuName}</Text>
                                <Text style={styles.foodPrice}>{menuItem.price}</Text>
                            </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}