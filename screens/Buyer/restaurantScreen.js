import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../styles/screens/Buyer/restaurantScreen.style';
import PopularFood from '../../components/Buyer/popularFood';
import FoodList from '../../components/Buyer/foodList'
import { authentication, db } from '../../firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import styles2 from '../../styles/components/foodList.style'

export default function Restaurant({route}){
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

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Image source={{ uri: route.params.item.restaurantImg}} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>{route.params.item.restaurantName}</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles2.h1}>Menu</Text>
                    <FlatList
                        style={{ height: '100%' }}
                        data={menu}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles2.containerButton} onPress={() => navigation.navigate('Menu', {item})}>
                                <Image source={{ uri: item.imgUri }} style={styles2.image} />
                                <View style={styles2.infoContainer}>
                                    <Text style={styles2.foodName}>{item.menuName}</Text>
                                    <Text style={styles2.foodPrice}>RM {item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        vertical
                    />
                </View>
            </View>
    )
}