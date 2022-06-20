import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../../styles/screens/LogoutStack/registerScreen.style.js';
import uuid from 'react-native-uuid';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { authentication, db, storage } from '../../firebase.js';
import { Picker } from '@react-native-picker/picker';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { ref, uploadBytes } from 'firebase/storage';


export default function RegisterRestaurant() {

    const navigation = useNavigation()
    const [restaurant, setRestaurant] = useState('')
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState("food")

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === "granted");
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>
    }

    const AddRestaurantData = async () => {
                const uid = uuid.v4();
                const restaurants = doc(db, "restaurant", uid)
                const users = doc(db, "users", authentication.currentUser.uid)
                
                const docData = {
                    "restaurantID": uid,
                    "restaurantName": restaurant,
                    "searchName": restaurant.toLowerCase(),
                    "type": type,
                    "restaurantImg": image,
                }

                const docData2 = {
                    "firstTime": "no",
                    "restaurantID": uid,
                }

                setDoc(restaurants, docData)
                updateDoc(users, docData2)

                    .then(() => {
                        alert("Document Created!")
                    })
                    .catch((error) => {
                        alert(error)
                    })
                const imageRef = ref(storage, restaurant);
                const img = await fetch(image);
                const bytes = await img.blob();

                await uploadBytes(imageRef, bytes);
                navigation.navigate('Login')
                console.log(user.email);
    }

    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <MaterialIcons name="arrow-back" size={32} style={styles.icon} />
                    <View>
                        <Text style={styles.h1}>Register Restaurant</Text>
                        <Text style={styles.h2}>Please fill in a few details below</Text>
                        <Text style={styles.text}>Restaurant Name</Text>
                        <TextInput
                            value={restaurant}
                            onChangeText={text => setRestaurant(text)}
                            style={styles.input}
                        />
                        <Picker
                            selectedValue={type}
                            onValueChange={(itemValue) => setType(itemValue)}
                        >
                            <Picker.Item label='Food Stall' value="food"/>
                            <Picker.Item label='Drink Stall' value="drink"/>
                        </Picker>
                        <TouchableOpacity onPress={() => pickImage()}>
                            <Text style={styles.textButton1}>Pick Image</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableHighlight onPress={AddRestaurantData} style={styles.button}>
                                <Text style={styles.textButton}>Register</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

