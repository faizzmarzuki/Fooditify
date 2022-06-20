import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import styles from '../../styles/screens/Seller/profileScreen.style'
import { doc, getDoc } from 'firebase/firestore';
import { authentication, db } from '../../firebase';

export default function EmailCard() {

    const [userInfo, setUserInfo] = useState([]);

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

    useEffect(() => {
        const fetch = async () => {
            const fetchedData = await GetData();
            setUserInfo(fetchedData);
        }
        fetch();
    }, [])

    return (
        <View style={styles.thirdContainer}>
            <View style={styles.thirdcontentContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.h2}>Email</Text>
                    <TouchableOpacity>
                        <Foundation name='pencil' size={18} />
                    </TouchableOpacity>
                </View>
                <Text>{userInfo.email}</Text>
            </View>
        </View>
    )
}