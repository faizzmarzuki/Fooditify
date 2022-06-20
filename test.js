import { addDoc, collection, doc, getDoc, getDocs, limit, query, setDoc, updateDoc, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
import { authentication, db, storage } from './firebase'
import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker';


function InsertOrder(){
    var [counter, setCounter] = useState(2);
    const [instruction, setInstruction] = useState('');
    // const currentUser = "9Q9hKtyancRF2TJQMEBYNPEUr243"
    // const currentUser = "fBkz2yJsOMVj3U5cZi5bQgeeaps1"
    const currentUser = "bnvwpH17mgcibDwsINoqDbumQQ12"
    const cartItemUid = uuid.v4();
    //const cartItemUid = "18bc23b5-8f39-4e5a-a01a-f9bd01642adb"
    const orderRef = collection(db, "order");
    const newOR = doc(orderRef);
    const [cartItem, setCartItem] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    var subTotalCart = 0
    const cartData = []
    const ordered = []
    const [orderItem, setOrderItem] = useState([])

    const TotalPrice = () => {
        var totalPrice = 10 * counter;
        return totalPrice;
    }

    const orderData = {
        "uID": currentUser,
        "status": "inCart",
        "proveUri": null,
        "paymentMethod": null,
        "id": cartItemUid
    }
    
    const InsertBaru = async () => {
        const restRef = collection(db, "restaurant");
        const restSnap = await getDocs(restRef);
        const restID = "19ae983f-ca95-4b29-9a7c-264e2722850a"
        const restID2 = "d61a0aa3-b2de-45d3-ace6-e96a684cc166"
        const toCart = collection(db, "order")
        const q = query(toCart, where("uID", "==", currentUser),limit(1));
        const querySnap = await getDocs(q);
        
        
        if(querySnap.size != 0){
            querySnap.forEach((item)=>{
                console.log(item.id)
                if (item.data().uID == currentUser) {
                    if (item.data().status == "inCart"){
                        const fetchRest = async () => {
                            const orderRefty = collection(db, "order", item.id, "cart");
                            const oRft = query(orderRefty, where("restaurantID","==", restID), limit(1))
                            const someSnap = await getDocs(oRft)
                            const sized = someSnap.size
                            console.log(sized)
                            if(sized == 0){
                                setDoc(newOR, orderData)
                                    .then(() => {
                                        console.log("Successfully created order")
                                        const cartOrder = collection(newOR, "cart")
                                        addDoc(cartOrder, {
                                            "menuID": "0bbddc53-977f-4324-b742-073cdaa39284",
                                            "imgUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFooditify-d08f8a1e-999e-481b-a016-bbb67cc9449a/ImagePicker/2db11c8a-d10a-4e21-b23b-5ddf8dc4df10.jpg",
                                            "menuName": "Nasi Goreng Crot",
                                            "quantity": parseInt(counter),
                                            "instruction": "cuba",
                                            "itemTotalPrice": parseFloat(TotalPrice()),
                                            "restaurantID": restID
                                        })
                                            .then(() => {
                                                console.log("Succesfully added into cart!")
                                            })
                                            .catch((e) => {
                                                console.log("Sorry error")
                                            })
                                    })
                                    .catch(() => {
                                        console.error();
                                    }) 
                            }else{
                                console.log("test")
                                addDoc(orderRefty, {
                                    "menuID": "0bbddc53-977f-4324-b742-073cdaa39284",
                                    "imgUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFooditify-d08f8a1e-999e-481b-a016-bbb67cc9449a/ImagePicker/2db11c8a-d10a-4e21-b23b-5ddf8dc4df10.jpg",
                                    "menuName": "Nasi Goreng Crot",
                                    "quantity": parseInt(counter),
                                    "instruction": "cuba",
                                    "itemTotalPrice": parseFloat(TotalPrice()),
                                    "restaurantID": restID
                                })
                                    .then(() => {
                                        console.log("Succesfully added into cart!")
                                    })
                                    .catch((e) => {
                                        console.log("Sorry error")
                                    })
                            }
                        }
                        fetchRest()
                    } 
                }
            })
        }else{
                setDoc(newOR, orderData)
                    .then(() => {
                        console.log("Successfully created order")
                        const cartOrder = collection(newOR, "cart")
                        addDoc(cartOrder, {
                            "menuID": "0bbddc53-977f-4324-b742-073cdaa39284",
                            "imgUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFooditify-d08f8a1e-999e-481b-a016-bbb67cc9449a/ImagePicker/2db11c8a-d10a-4e21-b23b-5ddf8dc4df10.jpg",
                            "menuName": "Nasi Goreng Crot",
                            "quantity": parseInt(counter),
                            "instruction": "cuba",
                            "itemTotalPrice": parseFloat(TotalPrice()),
                            "restaurantID": restID
                        })
                            .then(() => {
                                console.log("Succesfully added into cart!")
                            })
                            .catch((e) => {
                                console.log("Sorry error")
                            })
                    })
                    .catch(() => {
                        console.error();
                    }) 
        }
    }






    var TotalPricee = 0
    const [tp, setTp] = useState(0)
    const date = new Date()
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name = month[date.getMonth()];
    let contoh = "June"
    const [pickMonth, setMonth] = useState("January")
    const GenerateReport = async () => {

        if(name == pickMonth){
            console.log(name)
        }else{
            console.log(pickMonth)
        }
        const orderReft = collection(db, "order")
        const qqqq = query(orderReft, where("paymentMethod", "!=", "null"))
        const querySnappy = await getDocs(qqqq)
        querySnappy.forEach((doc) => {
            console.log(doc.id)
            const test = async()=>{
                const testo = collection(db, "order", doc.id, "cart")
                const ayy = query(testo, where("restaurantID", "==", "19ae983f-ca95-4b29-9a7c-264e2722850a"))
                const ayyo = await getDocs(ayy)

                ayyo.forEach((item) => {
                    setTp(0)
                    TotalPricee = TotalPricee+item.data().itemTotalPrice
                    setTp(TotalPricee) 
                    
                })
                
            }
            test()
            // console.log(doc.data())
            
        })
        console.log(tp)
        
    }









    //for insert data into cart
    const Insert = async () => {
        const toCart = collection(db, "order")
        const q = query(toCart, where("uID", "==", currentUser), limit(1));
        const fetchInsert = async () => {
        const docSnap = await getDocs(toCart);
        const querySnap = await getDocs(q);
        var size = docSnap.size;
        
        if(size != 0){ 
            console.log("takde mat")
            querySnap.forEach((doc)=>{
                console.log("masuk sikit")
                if(doc.data().uID == currentUser && doc.data().status == "inCart"){
                    console.log("tapi boong")
                    console.log("masuk")
                    const cartOrder = collection(newOR, "cart")
                    addDoc(cartOrder, {
                        "menuID": "0bbddc53-977f-4324-b742-073cdaa39284",
                        "imgUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFooditify-d08f8a1e-999e-481b-a016-bbb67cc9449a/ImagePicker/2db11c8a-d10a-4e21-b23b-5ddf8dc4df10.jpg",
                        "menuName": "Nasi Goreng Crot",
                        "quantity": parseInt(counter),
                        "instruction": "cuba",
                        "itemTotalPrice": parseFloat(TotalPrice()),
                        "restaurantID": "19ae983f-ca95-4b29-9a7c-264e2722850a"
                    })
                        .then(() => {
                            console.log("Succesfully added into cart!")
                        })
                        .catch((e) => {
                            console.log("Sorry error")
                        })
                }else{
                    setDoc(newOR, orderData)
                        .then(() => {
                            console.log("Successfully created order")
                            const cartOrder = collection(newOR, "cart")
                            addDoc(cartOrder, {
                                "menuID": "0bbddc53-977f-4324-b742-073cdaa39284",
                                "imgUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFooditify-d08f8a1e-999e-481b-a016-bbb67cc9449a/ImagePicker/2db11c8a-d10a-4e21-b23b-5ddf8dc4df10.jpg",
                                "menuName": "Nasi Goreng Crot",
                                "quantity": parseInt(counter),
                                "instruction": "cuba",
                                "itemTotalPrice": parseFloat(TotalPrice()),
                                "restaurantID": "19ae983f-ca95-4b29-9a7c-264e2722850a"
                            })
                                .then(() => {
                                    console.log("Succesfully added into cart!")
                                })
                                .catch((e) => {
                                    console.log("Sorry error")
                                })
                        })
                        .catch(() => {
                            console.error();
                        }) 
                }
            })
            
        }else if(size == 0){
            setDoc(newOR, orderData)
                .then(() => {
                    console.log("Successfully created order")
                    const cartOrder = collection(newOR, "cart")
                    addDoc(cartOrder, {
                        "menuID": "0bbddc53-977f-4324-b742-073cdaa39284",
                        "imgUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFooditify-d08f8a1e-999e-481b-a016-bbb67cc9449a/ImagePicker/2db11c8a-d10a-4e21-b23b-5ddf8dc4df10.jpg",
                        "menuName": "Nasi Goreng Crot",
                        "quantity": parseInt(counter),
                        "instruction": "cuba",
                        "itemTotalPrice": parseFloat(TotalPrice()),
                        "restaurantID": "19ae983f-ca95-4b29-9a7c-264e2722850a"
                    })
                        .then(() => {
                            console.log("Succesfully added into cart!")
                        })
                        .catch((e) => {
                            console.log("Sorry error")
                        })
                })
                .catch(() => {
                    console.error();
                })
        }else{
            console.log("diboong keknya")
        }
        }
        fetchInsert()
    }

    const updateOrder = async () => {
        const updateCart = collection(db, "order")
        const upData = {
            "status": "order"
        }
        const qq = query(updateCart, where("status", "==", "inCart"), where("uID", "==", currentUser),limit(1))
        const snapThat = await getDocs(qq)
        snapThat.forEach((data) => {
            const yo = doc(db, "order", data.id)
            updateDoc(yo,upData)
            .then(()=>{
                console.log("selamat")
            })
            .catch(()=>{
                console.log("tak selamat")
            })
        })
    }

    const updatePending = async () => {
        const updateCart = collection(db, "order")
        const upData = {
            "status": "pending"
        }
        const qq = query(updateCart, where("status", "==", "order"), where("uID", "==", currentUser),limit(1))
        const snapThat = await getDocs(qq)
        snapThat.forEach((data) => {
            const yo = doc(db, "order", data.id)
            updateDoc(yo, upData)
                .then(() => {
                    console.log("selamat")
                })
                .catch(() => {
                    console.log("tak selamat")
                })
        })
    }

    const FetchCart = async () => {
        const cartItemRef = collection(db, "order", currentUser, "cart");
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
    }

    // const FetchOrder = async () => {
    //     const cartToOrder = collection(db, "order")
    //     const q = query(cartToOrder, where("status", "==", "order"))
    //     const querySnap = await getDocs(q)
    //     const fetchOrdered = async () => {
    //         querySnap.forEach((doc) => {
    //             const uID = doc.data().uID
    //             console.log(doc.id, "=>", uID)
    //             const ToOrder = collection(db, "order", doc.id, "cart")
    //             const restaurantID = "d61a0aa3-b2de-45d3-ace6-e96a684cc166"
    //             const fetchAllOrder = async () => {
    //                 console.log("masuk")
    //                 const q1 = query(ToOrder, where("restaurantID", "==", restaurantID))
    //                 const docSnap = await getDocs(q1)
    //                 docSnap.forEach((item) => {
    //                     ordered.push({ ...item.data(), id: item.id })
    //                 })
    //                 setOrderItem(ordered)
    //             }
    //             fetchAllOrder()
    //         }) 
    //     }
    //     fetchOrdered()
    // }

    const [user, setUser] = useState('')
    const [total, setTotal] = useState([])

    const FetchOrder = async () => {
        const currentUser = "yCFdwmFPGtQFDzBmlWTvIh3x7J32"
        const userCollection = doc(db, "users", currentUser)
        const userSnap = await getDoc(userCollection)
        if(userSnap.exists()){
            const currentRestaurant = userSnap.data().restaurantID
            const orderCollection = collection(db, "order")
            const q = query(orderCollection, where("status", "==", "order"))
            const quewy = await getDocs(q)
            quewy.forEach((order)=>{
                const cartForRestaurant = collection(db,"order", order.id, "cart")
                const fetchData = async() =>{
                    const cartCollection = query(cartForRestaurant, where("restaurantID", "==", currentRestaurant))
                    const quewyy = await getDocs(cartCollection)
                    quewyy.forEach((cart) => {
                        const FetchUser = async() => {
                            const userCollection2 = doc(db, "users", order.data().uID)
                            const userSnappy = await getDoc(userCollection2)
                            if(userSnappy.exists){
                                name = userSnappy.data().name
                                setUser(name)
                            }
                        }
                        FetchUser()
                        ordered.push({ ...cart.data(), id: cart.id })
                    })
                    setOrderItem(ordered)
                }
                console.log(user)
                fetchData()
            })
        }
    }
            

    return(
        <View>
            <TouchableOpacity onPress={InsertBaru} style={styles.button}>
                <Text>Insert Order</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={FetchOrder} style={styles.button}>
                <Text>Fetch Data</Text>
            </TouchableOpacity>
            <FlatList
                data={orderItem}
                numColumns={1}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.container1}>
                            <View style={styles.container2}>
                                <Text>{item.id}</Text>
                                <Text>{user}</Text>
                            </View>
                            <View style={styles.container3}>
                                <Text>Subtotal</Text>
                                <Text>RM{item.itemTotalPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity onPress={updateOrder} style={styles.button}>
                <Text>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={updatePending} style={styles.button}>
                <Text>Pending</Text>
            </TouchableOpacity>
            <Picker
                selectedValue={pickMonth}
                onValueChange={(itemValue) => setMonth(itemValue)}
            >
                <Picker.Item label='January' value="January" />
                <Picker.Item label='February' value="February" />
                <Picker.Item label='March' value="March" />
                <Picker.Item label='April' value="April" />
                <Picker.Item label='May' value="May" />
                <Picker.Item label='June' value="June" />
                <Picker.Item label='July' value="July" />
                <Picker.Item label='August' value="August" />
                <Picker.Item label='September' value="September" />
                <Picker.Item label='October' value="October" />
                <Picker.Item label='November' value="November" />
                <Picker.Item label='December' value="December" />
            </Picker>
            <TouchableOpacity onPress={GenerateReport} style={styles.button}>
                <Text>Report</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 50,
    },
    container2: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default InsertOrder;