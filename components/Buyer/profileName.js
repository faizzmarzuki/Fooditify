import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import styles from '../../styles/screens/Buyer/profileScreen.style'
import { useNavigation } from '@react-navigation/native';
import { authentication, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';



export default function ProfileName(){

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

    const navigation = useNavigation()

    return(
        <View style={styles.secondContainer}>
            <View style={styles.secontentContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.h2}>Name</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Name')}>
                        <Foundation name='pencil' size={18} />
                    </TouchableOpacity>
                </View>
                <Text>{userInfo.name}</Text>
            </View>
        </View>
    )
}