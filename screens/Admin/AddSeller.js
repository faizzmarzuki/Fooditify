import React, { useState } from 'react'
import { View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../../styles/screens/LogoutStack/registerScreen.style.js';
import { MaterialIcons } from '@expo/vector-icons';
import { authentication, db } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';


export default function RegisterSeller() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const SignUp = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((result) => {
                // Signed in 
                const userID = result.user.uid;
                const myDoc = doc(db, "users", userID)

                const docData = {
                    "id": userID,
                    "name": name,
                    "email": email,
                    "phone": phone,
                    "firstTime": "yes",
                    "restaurantID": null,
                    "role": "seller",
                }

                setDoc(myDoc, docData)

                    .then(() => {
                        alert("Seller Created!")
                        navigation.navigate('HomeAdmin')
                    })
                    .catch((error) => {
                        alert(error)
                    })
                // navigation.navigate('Login')
                console.log(user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <MaterialIcons name="arrow-back" size={32} style={styles.icon} />
                    <View>
                        <Text style={styles.h1}>Register Seller</Text>
                        <Text style={styles.h2}>Please fill in a few details below</Text>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.input}
                        />
                        <Text style={styles.text}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={text => setName(text)}
                            style={styles.input}
                        />
                        <Text style={styles.text}>Phone</Text>
                        <TextInput
                            value={phone}
                            onChangeText={text => setPhone(text)}
                            style={styles.input}
                        />
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                        <View>
                            <TouchableHighlight onPress={SignUp} style={styles.button}>
                                <Text style={styles.textButton}>Register</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}