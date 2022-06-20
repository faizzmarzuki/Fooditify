import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/components/sellerList.style.'
import styles2 from '../../styles/components/foodCard.style'
import FoodCard from './foodCard'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { authentication, db } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function FoodList() {

    const [menu, setMenu] = useState([]);
    const menus = [];

    useEffect(() => {
        const fetch = async () => {
            const data = await GetData();
            const docRef = collection(db, "restaurant", data.restaurantID, "menus");
            const docSnap = await getDocs(docRef);
            docSnap.forEach((doc) => {
                menus.push({ ...doc.data(), id: doc.id })
            })
            setMenu(menus)
        }
        fetch();
    }, [])

    const GetData = async () => {
        const docRef = doc(db, "users", authentication.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else { 
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } 

    const navigation = useNavigation()
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={30} />
                <Text style={styles.headerText}>Menu</Text>
            </View>
            {/* <ScrollView vertical={true}> */}
            <FlatList
                style={{height:'100%'}}
                data={menu} 
                numColumns={1}
                renderItem={({item}) => ( 
                    <Pressable style={styles.containerButton} onPress={() => navigation.navigate('MenuEdit', { item }) }>
                        <View style={styles2.container}>
                            <Image source={{uri: item.imgUri}} style={styles2.image} />
                            <View style={styles2.infoContainer}>
                                <Text style={styles2.text}>{item.menuName}</Text>
                                <Text style={styles2.text}>{item.price}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
            {/* </ScrollView> */}
            <TouchableOpacity style={styles.buttonMain} onPress={() => navigation.navigate('MenuAdd')}>
                <Text style={styles.buttonText}>Add menu</Text>
            </TouchableOpacity>
        </View>
    )
}