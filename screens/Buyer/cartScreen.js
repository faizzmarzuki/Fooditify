import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import styles from '../../styles/screens/Buyer/cartScreen.style';
import styles2 from '../../styles/components/cartItem.style'
import CartEstimation from '../../components/Buyer/cartEstimation';
import { useNavigation } from '@react-navigation/native';
import {authentication, db} from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Cart() {
    
    const [cartItem, setCartItem] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const cartData = []
    const currentUser = authentication.currentUser.uid
    const navigation = useNavigation()
    var subTotalCart = 0

    useEffect(() => {
        const FetchOrder = async () => {
            const cartToOrder = collection(db, "order")
            const q = query(cartToOrder, where("status", "==", "inCart"), where("uID", '==', currentUser))
            const querySnap = await getDocs(q)
            const fetchOrdered = async () => {
                querySnap.forEach((doc) => {
                    console.log(doc.id, "=>", doc.data().uID)
                    const ToOrder = collection(db, "order", doc.id, "cart")
                    const fetchAllOrder = async () => {
                        const docSnap = await getDocs(ToOrder)
                        docSnap.forEach((item) => {
                            cartData.push({ ...item.data(), id: item.id })
                            subTotalCart = item.data().itemTotalPrice + subTotalCart;
                            setTotalCart(subTotalCart)
                        })
                        setCartItem(cartData)
                    }
                    fetchAllOrder()
                })
            }
            fetchOrdered()
        }
        FetchOrder()
    },[])
    
    return (
        <View style={styles.container}>
                <Text style={styles.header}>Cart</Text>
                <CartEstimation />
                <FlatList
                    style={{ height: '100%'}}
                    data={cartItem}
                    numColumns={1}
                    renderItem={({item}) => (
                        <View style={styles2.containerList}>
                            <TouchableHighlight style={styles2.Button}>
                                <Text style={styles2.textButton}>{item.quantity}</Text>
                            </TouchableHighlight>
                            <Image
                                source={{ uri: item.imgUri }}
                                style={styles2.image}
                            />
                            <Text>{item.menuName}</Text>
                            <Text>RM {item.itemTotalPrice}</Text>
                        </View>
                    )}
                />
            <View style={styles.totalContainer}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>RM {totalCart}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonMain}>
                <Text style={styles.buttonText}>Review payment</Text>
            </TouchableOpacity>
        </View>

    )
}