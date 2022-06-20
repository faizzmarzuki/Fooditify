import React from 'react'
import { View, Text} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import styles from '../../styles/screens/Buyer/profileScreen.style'
import ProfileMobile from '../../components/Buyer/profileMobile';
import ProfileEmail from '../../components/Buyer/profileEmail';
import ProfileName from '../../components/Buyer/profileName';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { authentication } from '../../firebase';

export default function ProfileScreen(){

    const navigation = useNavigation()
    
    const SignOut = () => {
        signOut(authentication)
        .then(()=>{
            console.log("Successfully sign out")
            navigation.navigate('Login')
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }


    return(
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Text style={styles.header}>Profile</Text>
                <Ionicons name='ios-log-out-outline' size={30} onPress={SignOut}/>
            </View>
            <ProfileName/>
            <ProfileEmail/>
            <ProfileMobile/>
        </View>
    )
}