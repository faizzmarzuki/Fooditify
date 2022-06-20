import { useNavigation} from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TouchableHighlight, ScrollView } from 'react-native'
import styles from '../../styles/screens/Buyer/checkoutScreen.style'
import { Entypo, Foundation } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { authentication, db } from '../../firebase';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import styles2 from '../../styles/components/checkoutOrder.style'
import styles3 from '../../styles/components/paymentMethod.style'

export default function CheckoutScreen(){

    const [cartItem, setCartItem] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState("Online Transfer")
    const cartData = []
    const currentUser = authentication.currentUser.uid
    const cartItemRef = collection(db, "cart", currentUser, "cartItem");
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
    }, [])

    const Payments = async() => {
        if(paymentMethod == "Cash"){
            const ordData = collection(db,"order")
            const queryOrd = query(ordData, where("uID", "==", currentUser))
            const queryData = await getDocs(queryOrd)
            queryData.forEach((item)=>{
                console.log(item.id)
                const updateData = async()=>{
                    const ord = doc(db, "order", item.id)
                    const upData = {
                        "paymentMethod": paymentMethod,
                        "proveUri": "no need",
                        "status": "order"
                    }
                    updateDoc(ord, upData)
                }
                updateData()
            })
            navigation.navigate('Order')
        }else{
            console.log("goodjob")
        }
    }
    
    const navigation = useNavigation()

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Checkout</Text>
            <View style={styles3.container}>
                <View style={styles3.container1}>
                    <Entypo name='wallet' size={18} style={styles3.icon}>
                        <Text style={styles3.h1}>Payment Method</Text>
                    </Entypo>
                    <TouchableHighlight onPress={() => navigation.navigate('Payment')}>
                        <Foundation name='pencil' size={18} />
                    </TouchableHighlight>
                </View>
                <View style={styles3.container2}>
                    <Picker
                        selectedValue={paymentMethod}
                        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
                    >
                        <Picker.Item label='Online Transfer' value="Online Transfer" />
                        <Picker.Item label='Cash' value="Cash" />
                    </Picker>
                </View>
            </View>
            <View style={styles2.container}>
                <View style={styles2.container1}>
                    <Foundation name='clipboard-notes' size={18} style={styles2.icon}>
                        <Text>Order summary</Text>
                    </Foundation>
                    <Text></Text>
                </View>
                <FlatList
                    data={cartItem}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <View style={styles2.container2}>
                            <Text>{item.quantity}x</Text>
                            <Text>{item.menuName}</Text>
                            <Text>RM {item.itemTotalPrice}</Text>
                        </View>
                    )}
                />
            </View>
            <Text style={styles.text}>By completing this order, I agree to all terms and conditions.</Text>
            <View style={styles.totalContainer}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>RM {totalCart}</Text>
            </View>
            <TouchableOpacity onPress={Payments} style={styles.buttonMain}>
                <Text style={styles.buttonText}>Place order</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}