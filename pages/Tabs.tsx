import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Weather from "./Weather/Weather";
import { primary } from "../app/const/color";
import { useAppSelector } from "../app/redux/hooks";
import {useEffect} from "react"

const Tab = createMaterialTopTabNavigator();

const cities = [
    {
        name: 'arz'
    },
    {
        name: 'sasa'
    },
    {
        name: 'nizhny'
    },
    {
        name: 'moscow'
    },
    {
        name: 'peter'
    },
    {
        name: 'arzamas'
    }
]


export default function Tabs({navigation}) {
    const cities2 = useAppSelector(state=>state.cityReducer.city)
    useEffect(()=>{
        console.log(cities2);
        
    }, [])


    return(
    < >
        <TouchableOpacity style={style.plus} onPress={()=>navigation.navigate('Add')}>
            <Text style={style.text}>+</Text>
        </TouchableOpacity>
        <Tab.Navigator 
         screenOptions={{ tabBarScrollEnabled: true,tabBarIndicatorStyle:{
        } }}
        sceneContainerStyle={{ backgroundColor: "white" }}
        >
            {
                cities2.length ?
                cities2?.map(city=>(
                    <Tab.Screen key={city.name} name={city.name} component={Weather} initialParams={{ name: city.name }}/>
                )) : 
                <Tab.Screen name={'city.name'} component={Weather} initialParams={{ name: 'name' }}/>
            }
        </Tab.Navigator>
    </>
    )
}


const style = StyleSheet.create({
    plus:{
        position: 'absolute',
        zIndex:  20,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderRadius: 50,
        left: 20,
        bottom: 20,
        overflow: 'hidden',
    },
    text: {
        position: 'relative',
        left: 11,
        right: 10,
        top: -11,
        bottom: 10,
        fontSize: 50,
        color: 'white',
    }
})