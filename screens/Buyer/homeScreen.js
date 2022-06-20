import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/screens/Buyer/homeScreen.style';
import HeaderApp from '../../components/All/header.js';
import Restaurant from '../../components/Buyer/restaurantList.js';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HeaderApp />
            <View style={styles.stallButton}>
                <MaterialCommunityIcons.Button name="noodles"
                    size={28}
                    backgroundColor="#523700"
                    style={styles.button}
                    color="#FFEFC7"
                    >
                    <Text style={styles.buttonText}>Food stall</Text>
                </MaterialCommunityIcons.Button>
                <MaterialIcons.Button name="emoji-food-beverage"
                    size={28}
                    backgroundColor="#523700"
                    style={styles.button}
                    color="#FFEFC7"
                    >
                    <Text style={styles.buttonText}>Drink stall</Text>
                </MaterialIcons.Button>
            </View>
            <Restaurant/>
        </View>
    );
}

