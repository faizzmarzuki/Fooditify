import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker' ;
import uuid from 'react-native-uuid';
import styles from '../../styles/screens/Seller/menuScreen.edit.style'
import { useEffect, useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { authentication, db, storage } from '../../firebase';


export default function MenuScreenAdd(){
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [menu, setMenu] = useState('');
    const [price, setPrice] = useState(null);
    
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
            aspect: [4,3],
            quality: 1,
        });

        console.log(result);

        if(!result.cancelled){
            setImage(result.uri);
        }
    };

    if(hasGalleryPermission === false){
        return <Text>No access to Internal Storage</Text>
    }

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

    const AddMenu = async () =>{
        const uid = uuid.v4();
        
        const myDoc = doc(db, "restaurant", userInfo.restaurantID, "menus", uid)

        const docData = {
            id: uid,
            restaurantID: userInfo.restaurantID,
            menuName: menu,
            price: parseFloat(price),
            imgUri: image,
        }

        setDoc(myDoc, docData)

            .then(() => {
                alert("Document Created!")
            })
            .catch((error) => {
                alert(error)
            })
        const imageRef = ref(storage, "menus/"+userInfo.restaurantID+"/"+uid);
        const img = await fetch(image);
        const bytes = await img.blob();

        await uploadBytes(imageRef, bytes);
    }


    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => pickImage()} style={styles.image}>
                    <View style={styles.viewButton1}>
                        {image === null ? (<Text style={styles.textButton1}>Pick Image</Text>) : 
                        (<Image source={{ uri: image }} style={styles.image} />)}
                    </View>
                </TouchableOpacity>
                <Ionicons name='arrow-back' size={30} color="#FFEFC7" style={{ position: 'absolute', top: 30, left: 10 }} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Menu Name</Text>
                <TextInput 
                    value={menu}
                    onChangeText={text => setMenu(text)}
                    style={styles.input} 
                />
                <Text>Price</Text>
                <TextInput 
                    value={price}
                    onChangeText={text => setPrice(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.split}/>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={() => AddMenu()}>
                    <Text style={styles.textButton}>Add to Menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}