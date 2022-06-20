import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from '../../styles/screens/Seller/menuScreen.edit.style'
import { useEffect, useState } from 'react';
import { authentication, db, storage } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function MenuScreenEdit({route}) {
    
    const navigation = useNavigation()
    const [url, setUrl] = useState();
    const [image, setImage] = useState(null);
    const [menu, setMenu] = useState('');
    const [price, setPrice] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const reference = ref(storage, "menus/" + userInfo.restaurantID + "/" + route.params.item.id);

    const GetUserData = async () => {
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
            const data = await GetUserData();
            
            setUserInfo(data);
        }
        fetch();
    }, [])

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

    const updateData = async () => {
        
        const myDoc = doc(db, "restaurant", route.params.item.restaurantID, "menus", route.params.item.id )
        
        if(image === null){
            const docData = {
                id: route.params.item.id,
                menuName: menu,
                price: parseFloat(price),
            }
            updateDoc(myDoc, docData)

                .then(() => {
                    alert("Menu Updated!")
                })
                .catch((error) => {
                    alert(error)
                })
        }else{
            const docData = {
                id: route.params.item.id,
                menuName: menu,
                price: parseFloat(price),
                imgUri: image,
            }
            updateDoc(myDoc, docData)

                .then(() => {
                    alert("Document Created!")
                })
                .catch((error) => {
                    alert(error)
                })
            const imageRef = ref(storage, "menus/" + userInfo.restaurantID + "/" + route.params.item.id);
            const img = await fetch(image);
            const bytes = await img.blob();

            await uploadBytes(reference, bytes);
            console.log(route.params.item.menuName)
        }

        
    }

    const deleteData = async () => {
        const myDoc = doc(db, "restaurant", userInfo.restaurantID, "menus", route.params.item.id);
        deleteDoc(myDoc);
        navigation.navigate('Menu');
    }

    // useEffect(() => {
    //     const func = async () => {
            
    //         await getDownloadURL(reference).then((x) => {
    //             setUrl(x)
    //             // setImage(x)
    //         })
    //     }

    //     func();
    // })

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => pickImage()} style={styles.image}>
                    <View style={styles.viewButton1}>
                        {image === null ? <Image source={{ uri: url }} style={styles.image} /> :
                        (<Image source={{ uri: image }} style={styles.image} />)}
                    </View>
                </TouchableOpacity>
                <Ionicons name='arrow-back' size={30} color="#FFEFC7" style={{ position: 'absolute', top: 30, left: 10 }} />
                <FontAwesome name='trash' size={30} color="#FFEFC7" style={{ position: 'absolute', top: 30, right: 15 }} onPress={() => {deleteData()}}/>
            </View>
            <View style={styles.inputContainer}>
                <Text>Food/Drink Name</Text>
                <TextInput
                    onChangeText={text => setMenu(text)}
                    value={menu}
                    style={styles.input}
                />
                <Text>Price</Text>
                <TextInput
                    onChangeText={text => setPrice(text)}
                    value={price}
                    style={styles.input}

                />
            </View>
            <View style={styles.split} />
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => updateData()} style={styles.button}>
                    <Text style={styles.textButton}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}