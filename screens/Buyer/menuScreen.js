import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/screens/Buyer/menuScreen.style'
import { addDoc, collection, doc, getDocs, limit, query, setDoc, where } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import { authentication, db } from '../../firebase';

 export default function MenuScreen({route}){

     var [counter, setCounter] = useState(1);
     const [instruction, setInstruction] = useState('');
     const cartItemUid = uuid.v4();
     //const orderItemUid = uuid.v1();
     const currentUser = authentication.currentUser.uid
     const orderRef = collection(db, "order");
     const newOR = doc(orderRef);

     const orderData = {
         "uID": currentUser,
         "status": "inCart",
         "proveUri": null,
         "paymentMethod": null,
         "id": cartItemUid,
         "restaurantID": route.params.item.restaurantID
     }

     const TotalPrice = () => {
         var totalPrice = route.params.item.price * counter;
         return totalPrice;
     }
     const InsertBaru = async () => {
         const toCart = collection(db, "order")
         const q = query(toCart, where("uID", "==", currentUser), limit(1));
         const querySnap = await getDocs(q);


         if (querySnap.size != 0) {
             querySnap.forEach((item) => {
                 console.log(item.id)
                 if (item.data().uID == currentUser) {
                     if (item.data().status == "inCart") {
                         const fetchRest = async () => {
                             const orderRefty = collection(db, "order", item.id, "cart");
                             const oRft = query(orderRefty, where("restaurantID", "==", route.params.item.restaurantID), limit(1))
                             const someSnap = await getDocs(oRft)
                             const sized = someSnap.size
                             console.log(sized)
                             if (sized == 0) {
                                 setDoc(newOR, orderData)
                                     .then(() => {
                                         console.log("Successfully created order")
                                         const cartOrder = collection(newOR, "cart")
                                         addDoc(cartOrder, {
                                             "menuID": route.params.item.id,
                                             "imgUri": route.params.item.imgUri,
                                             "menuName": route.params.item.menuName,
                                             "quantity": parseInt(counter),
                                             "instruction": instruction,
                                             "itemTotalPrice": parseFloat(TotalPrice()),
                                             "restaurantID": route.params.item.restaurantID
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
                             } else {
                                 console.log("test")
                                 addDoc(orderRefty, {
                                     "menuID": route.params.item.id,
                                     "imgUri": route.params.item.imgUri,
                                     "menuName": route.params.item.menuName,
                                     "quantity": parseInt(counter),
                                     "instruction": instruction,
                                     "itemTotalPrice": parseFloat(TotalPrice()),
                                     "restaurantID": route.params.item.restaurantID
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
                     }else{
                        //  if(sized != 0){
                             setDoc(newOR, orderData)
                                 .then(() => {
                                     console.log("Successfully created order")
                                     const cartOrder = collection(newOR, "cart")
                                     addDoc(cartOrder, {
                                         "menuID": route.params.item.id,
                                         "imgUri": route.params.item.imgUri,
                                         "menuName": route.params.item.menuName,
                                         "quantity": parseInt(counter),
                                         "instruction": instruction,
                                         "itemTotalPrice": parseFloat(TotalPrice()),
                                         "restaurantID": route.params.item.restaurantID
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
                //  }
             })
         } else {
             setDoc(newOR, orderData)
                 .then(() => {
                     console.log("Successfully created order")
                     const cartOrder = collection(newOR, "cart")
                     addDoc(cartOrder, {
                         "menuID": route.params.item.id,
                         "imgUri": route.params.item.imgUri,
                         "menuName": route.params.item.menuName,
                         "quantity": parseInt(counter),
                         "instruction": instruction,
                         "itemTotalPrice": parseFloat(TotalPrice()),
                         "restaurantID": route.params.item.restaurantID
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

     return(
         <ScrollView style={styles.container}>
             <View >
                 <View>
                     <Image source={{uri: route.params.item.imgUri}} style={styles.image}/>
                 </View>
                 <View style={styles.infoContainer}>
                     <View style={styles.textContainer}>
                         <Text style={styles.mainText}>{route.params.item.menuName}</Text>
                         <Text style={styles.mainText}>RM {route.params.item.price}</Text>
                     </View>
                 </View>
                 <View style={styles.inputContainer}>
                     <Text>Special Instructions</Text>
                     <TextInput 
                        style={styles.input}
                        value={instruction}
                        onChangeText={text => setInstruction(text)}
                     />
                 </View>
                 <View style={styles.split}/>
                 <View style={styles.bottomContainer}>
                     <View style={styles.contentBottom}>
                         <TouchableOpacity>
                             <AntDesign name='minuscircle' size={20}/>
                         </TouchableOpacity>
                         <TextInput
                             value={counter}
                             onChangeText={text => setCounter(text)}
                             keyboardType="numeric"
                             style={styles.textBottom}
                         />
                         <TouchableOpacity>
                             <AntDesign name='pluscircle' size={20}/>
                         </TouchableOpacity>
                     </View>
                     <View>
                         <TouchableOpacity onPress={InsertBaru} style={styles.button}>
                             <Text style={styles.textButton}>Add to cart</Text>
                         </TouchableOpacity>
                     </View>
                 </View>
             </View>
         </ScrollView>
     )
 }