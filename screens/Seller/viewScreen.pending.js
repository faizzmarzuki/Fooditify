import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from '../../styles/screens/Seller/viewpendingScreen.style'
import styles2 from '../../styles/components/pendingCard.style'
import { Ionicons } from '@expo/vector-icons';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { authentication, db, storage } from '../../firebase.js';
import { useNavigation } from '@react-navigation/native';


export default function ViewPendingScreen() {
    const ordered = []
    const [user, setUser] = useState('')
    const [orderItem, setOrderItem] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    var subTotalCart = 0

    useEffect(() => {
        const FetchOrder = async () => {
            const currentUser = authentication.currentUser.uid
            const userCollection = doc(db, "users", currentUser)
            const userSnap = await getDoc(userCollection)
            if (userSnap.exists()) {
                const currentRestaurant = userSnap.data().restaurantID
                const orderCollection = collection(db, "order")
                const q = query(orderCollection, where("status", "==", "pending"), where("restaurantID", "==", currentRestaurant))
                const quewy = await getDocs(q)
                quewy.forEach((order) => {
                    // console.log(order.id)
                    ordered.push({ ...order.data(), id: order.id })
                    const cartForRestaurant = collection(db, "order", order.id, "cart")
                    const fetchData = async () => {
                        const userCollection2 = doc(db, "users", order.data().uID)
                        const userSnappy = await getDoc(userCollection2)
                        if (userSnappy.exists) {
                            const name = userSnappy.data().name
                            setUser(name)
                        }
                        const totally = await getDocs(cartForRestaurant)
                        totally.forEach((cart) => {
                            subTotalCart = cart.data().itemTotalPrice + subTotalCart;
                            setTotalCart(subTotalCart)
                        })
                    }
                    console.log(user)
                    fetchData()
                })
                setOrderItem(ordered)
            }
        }
        FetchOrder()
    }, [])

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={30} />
                <Text style={styles.headerText}>Pending</Text>
            </View>
            <FlatList
                data={orderItem}
                numColumns={1}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Pending', { item })}>
                        <View style={styles2.container1}>
                            <View style={styles2.container2}>
                                <Text>{item.id}</Text>
                                <Text>{user}</Text>
                            </View>
                            <View style={styles2.container3}>
                                <Text>Subtotal</Text>
                                <Text>RM{totalCart}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
} 