import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, Flatlist, TouchableOpacity } from 'react-native'
import styles from './styles/components/cartItem.style'
import {db} from './firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export default function Chart() {

    const [total, setTotal] = useState([])
    const [mont, setMont] = useState([])
    const fetchMonth = collection(db, "test");
    const totally = query(fetchMonth, where("year", "==", "2022"), where("user", "==", "a1"))
    
    
    const uniqueMonth = []
    var totalHarga = 0;
    useEffect(()=>{
        const fetching = async () => {
            const findMonth = await getDocs(totally)
            const bulan = []
            findMonth.forEach((doc)=>{
                console.log(doc.id)
                bulan.push(doc.data().month)
                const funcBaru = async () => {
                    const fetchTotal = collection(db, "test", doc.id, "testinside")
                    const getMonth = await getDocs(fetchTotal)
                    const harga = []
                    getMonth.forEach((price) => {
                        console.log(price.data().total)
                        totalHarga = totalHarga + price.data().total
                        console.log(totalHarga + "totalHarga")
                        harga.push(totalHarga) 
                    })
                    console.log(harga)
                    setTotal(harga)
                }
                funcBaru()
            })
            bulan.forEach((c) => {
                if(!uniqueMonth.includes(c)){
                    uniqueMonth.push(c)
                }
            }) 
            //console.log(uniqueMonth)
            
            setMont(uniqueMonth) 
        }
        fetching()
        
    },[])
    

    const data = {
        labels: mont,
        datasets: [
            {
                data: total,
                // data: mont,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
 
    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    };

    return(
        <View style={{marginTop:100, marginLeft:50, marginRight:50}}>
         {/* <TouchableOpacity onPress={fetching}>
            <Text>fetch</Text>
         </TouchableOpacity> */}
            <LineChart
                data={data}
                width={320}
                height={220}
                chartConfig={chartConfig}
                bezier
            />
        </View>
    )
}


