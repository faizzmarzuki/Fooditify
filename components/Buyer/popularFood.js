import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/components/popularFood.style'

export default function PopularFood(){
    return(
        <View>
            <Text style={styles.h1}>🔥Popular Food</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.containerButton}>
                    <View>
                        <Image source={require('../../assets/Foodie-assets/food-1.jpg')} style={styles.image} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.foodName}>Mee goreng</Text>
                            <Text style={styles.foodPrice}>RM 5.00</Text>
                        </View>
                    </View>
                </TouchableOpacity><TouchableOpacity style={styles.containerButton}>
                    <View>
                        <Image source={require('../../assets/Foodie-assets/food-2.jpg')} style={styles.image} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.foodName}>Laksa Johor</Text>
                            <Text style={styles.foodPrice}>RM 6.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
        
    )
}