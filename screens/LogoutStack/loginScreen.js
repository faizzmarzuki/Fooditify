import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableHighlight, Image, View } from 'react-native';
import { authentication,db } from '../../firebase';
import styles from '../../styles/screens/LogoutStack/loginScreen.style';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginScreen() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userInfo, setUserInfo] = useState('')

    // useEffect( () => {
    //     const unsubscribe = authentication.onAuthStateChanged(user => {
            
    //         if(user){
    //             // setUserInfo('');
    //             navigation.navigate('Home')
    //             // fetchData()
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    function SignIn() {
        signInWithEmailAndPassword(authentication,email,password)
            .then(async(result) => {
                user = result.user; 
                setUserInfo(null);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                console.log("yay");
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log(data);
                    if (data.role === "buyer") {
                        console.log("lol1");
                        navigation.navigate('Home')
                    } else if (data.role === "seller") {
                        console.log("lol3");
                        navigation.navigate('Seller')
                    } else if (data.role === "admin") {
                        console.log("lol2");
                        navigation.navigate('Admin')
                    } else {
                        console.log("lol");
                    }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Image
                    style={styles.image}
                    source={require('../../assets/Foodie-assets/LogoLoginBlack.png')}
                />
                <Text style={styles.h1}>Login</Text>
            </View>
            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput 
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input} 
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)} 
                    style={styles.input} 
                    secureTextEntry
                />
                <TouchableHighlight onPress={SignIn} style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableHighlight>
                <View style={styles.or}>
                    <Text style={styles.text}>OR</Text>
                </View>
                <TouchableHighlight onPress={() => navigation.navigate('Register')} style={styles.button}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableHighlight>

            </View>
        </View>
    );
}