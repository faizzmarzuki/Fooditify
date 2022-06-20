import React from 'react';
import { Image, View } from 'react-native';
import styles from '../../styles/components/header.style';

export default function Header(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/Foodie-assets/LogoLogin(small).png')}
            />
        </View>
    );
}