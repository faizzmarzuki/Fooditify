import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import styles from '../../styles/components/checkoutOrder.style'
import { authentication, db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function CheckoutOrder(){

    const [cartItem, setCartItem] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const cartData = []
    const currentUser = authentication.currentUser.uid
    const cartItemRef = collection(db, "cart", currentUser, "cartItem");
    // const navigation = useNavigation()
    var subTotalCart = 0

    useEffect(() => {
        const fetchCart = async () => {
            const docSnap = await getDocs(cartItemRef)
            docSnap.forEach((doc) => {
                cartData.push({ ...doc.data(), id: doc.id })
                subTotalCart = doc.data().itemTotalPrice + subTotalCart;
                setTotalCart(subTotalCart)
            });
            setCartItem(cartData)
        }
        fetchCart()
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Foundation name='clipboard-notes' size={18} style={styles.icon}>
                    <Text>Order summary</Text>
                </Foundation>
            </View>
            <FlatList
                data={cartItem}
                numColumns={1}
                renderItem={({item}) => (
                    <View style={styles.container2}>
                        <Text>{item.quantity}</Text>
                        <Text>{item.menuName}</Text>
                        <Text>RM {item.itemTotalPrice}</Text>
                    </View>
                )}
            />
        </View>
    )
}