import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native'
import Header from '../../components/All/header';
import styles from '../../styles/screens/Seller/homeScreen.style'
import { authentication, db } from '../../firebase';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export default function HomeScreen(){


    const navigation = useNavigation()
    const [totalMenu, setTotalMenu] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);
    const [totalPending, setTotalPending] = useState(0);
    const [totalFinish, setTotalFinish] = useState(0);
    

    useEffect(()=>{
        const fetchMenu = async () => {
            const data = await GetData();
            const docRef = collection(db, "restaurant", data.restaurantID, "menus");
            const docSnap = await getDocs(docRef);
            var size = 0;
            
            docSnap.forEach((doc) => {
                size = size + 1;
            })
            setTotalMenu(size); 
        }
        fetchMenu(); 
        const fetchOrder = async () => {
            const data = await GetData();
            const docRef = collection(db, "order");
            const quewy = query(docRef, where("status", "==", "order"), where("restaurantID", "==", data.restaurantID))
            const docSnap = await getDocs(quewy);
            var size = 0
            
            docSnap.forEach((doc) => {
                size = size + 1;
            })
            // console.log(size)
            setTotalOrder(size);
        }
        fetchOrder(); 
        const fetchPending = async () => {
            const data = await GetData();
            const docRef = collection(db, "order");
            const quewy = query(docRef, where("status", "==", "pending"), where("restaurantID", "==", data.restaurantID))
            const docSnap = await getDocs(quewy);
            var size = 0

            docSnap.forEach((doc) => {
                console.log(doc.id)
                size = size + 1;
            })
            // console.log(size)
            setTotalPending(size);
        }
        fetchPending(); 
        const fetchFinish = async () => {
            const data = await GetData();
            const docRef = collection(db, "order");
            const quewy = query(docRef, where("status", "==", "finish"), where("restaurantID", "==", data.restaurantID))
            const docSnap = await getDocs(quewy);
            var size = 0

            docSnap.forEach((doc) => {
                console.log(doc.id)
                size = size + 1;
            })
            // console.log(size)
            setTotalFinish(size);
        }
        fetchFinish(); 
    })

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

    return(
        <View style={styles.container}>
            <Header/>
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewOrder')}>
                        <Text style={styles.buttonHeader}>Order</Text>
                        <Text style={styles.buttonText}>{totalOrder}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.buttonHeader}>Menu</Text>
                        <Text style={styles.buttonText}>{totalMenu}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewPending')}>
                        <Text style={styles.buttonHeader}>Pending</Text>
                        <Text style={styles.buttonText}>{totalPending}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewFinish')}>
                        <Text style={styles.buttonHeader}>Finished</Text>
                        <Text style={styles.buttonText}>{totalFinish}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}