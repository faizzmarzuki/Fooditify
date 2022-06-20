import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/screens/Seller/orderScreen.style'
import styles2 from '../../styles/components/orderPayment.style'
import styles3 from '../../styles/components/orderSummary.style'
import { Entypo, Foundation } from '@expo/vector-icons';
import { authentication, db } from '../../firebase';
import { collection, doc, getDocs, query, updateDoc, where, getDoc } from 'firebase/firestore';

export default function OrderScreen({route}) {

    const ordered = []
    const [totalCart, setTotalCart] = useState(0)
    var subTotalCart = 0
    const [orderItem, setOrderItem] = useState([])
    const [paymentMethod, setPaymentMethod] = useState('')

    useEffect(() => {
        const FetchOrder = async () => {
            const currentUser = authentication.currentUser.uid
            const userCollection = doc(db, "users", currentUser)
            const userSnap = await getDoc(userCollection)
            if (userSnap.exists()) {
                const currentRestaurant = userSnap.data().restaurantID
                const orderCollection = collection(db, "order")
                const q = query(orderCollection, where("status", "==", "order"), where("restaurantID", "==", currentRestaurant))
                const quewy = await getDocs(q)
                quewy.forEach((order) => {
                    const cartForRestaurant = collection(db, "order", order.id, "cart")
                    const fetchData = async () => {
                        const quewyy = await getDocs(cartForRestaurant)
                        quewyy.forEach((cart) => {
                            ordered.push({ ...cart.data(), id: cart.id })
                            subTotalCart = cart.data().itemTotalPrice + subTotalCart;
                            setTotalCart(subTotalCart)
                        })
                        setOrderItem(ordered)
                    }
                    fetchData()
                    setPaymentMethod(order.data().paymentMethod)
                })
            }
        }
        FetchOrder()
    }, [])

    const updatePending = async () => {
        // console
        // const updateCart = collection(db, "order")
        const upData = {
            "status": "pending"
        }

        const yo = doc(db, "order", route.params.item.id)
        updateDoc(yo, upData)
            .then(() => {
                console.log("selamat")
            })
            .catch(() => {
                console.log("tak selamat")
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.h1}>Order</Text>
                <FontAwesome name='close' size={20} />
            </View>
            <View style={styles2.container}>
                <View style={styles2.container1}>
                    <Entypo name='wallet' size={18} style={styles2.icon}>
                        <Text style={styles2.h1}>Payment Method</Text>
                    </Entypo>
                </View>
                <View style={styles2.container2}>
                    <Text>{paymentMethod}</Text>
                    <Text>RM {totalCart}</Text>
                </View>
            </View>
            <View style={styles3.container}>
                <View style={styles3.container1}>
                    <Foundation name='clipboard-notes' size={18} style={styles3.icon}>
                        <Text>Order summary</Text>
                    </Foundation>
                </View>
                <FlatList
                    data={orderItem}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <View style={styles3.container2}>
                            <Text>{item.quantity}x</Text>
                            <Text>{item.menuName}</Text>
                            <Text>RM {item.itemTotalPrice}</Text>
                        </View>
                    )}
                />
                <View style={styles3.border} />
                <View style={styles3.container3}>
                    <Text>Subtotal</Text>
                    <Text>RM {totalCart}</Text>
                </View>
            </View>
            <Text style={styles.text}>By completing this order, I agree to all terms and conditions.</Text>
            <View style={styles.totalContainer}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>RM {totalCart}</Text>
            </View>
            <View style={styles.botContainer}>
                <TouchableOpacity style={styles.buttonMain} onPress={updatePending}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}