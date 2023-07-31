import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Weather from "./Weather/Weather";
import { primary } from "../app/const/color";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCity, initCity } from "../app/redux/WeatherSlice";

const Tab = createMaterialTopTabNavigator();

export default function Tabs({ navigation }) {
    const cities2 = useAppSelector((state) => state.cityReducer.city);

    const dispatch = useAppDispatch();
    async function city() {
        let res = await AsyncStorage.getItem("city");
        dispatch(initCity(JSON.parse(res)));
    }

    useEffect(() => {
        city();
    }, []);

    return (
        <>
            <TouchableOpacity
                style={style.plus}
                onPress={() => navigation.navigate("WeatherDay")}
            >
                <Text style={style.text}>+</Text>
            </TouchableOpacity>
            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarIndicatorStyle: {},
                }}
                tabBarOptions={{
                    activeBackgroundColor: {
                        backgroundColor: 'white'
                    },
                    pressOpacity: 0.3,
                    labelStyle: {
                        borderRadius: 20,
                        fontSize: 16,
                        textTransform: "none",
                    },
                    style: {
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        height: 50,
                        elevation: 0,
                    },
                    tabStyle: {
                        width: "auto",
                        marginLeft: 10,
                        alignItems: "center",
                        backgroundColor: "rgba(255,255,255,0.7)",
                        borderRadius: 20,
                    },
                }}
                sceneContainerStyle={{ backgroundColor: "white" }}
            >
                {cities2?.length ? (
                    cities2?.map((city, index) => (
                        <Tab.Screen
                            key={city?.name || 1}
                            name={city?.name + String(index)}
                            component={Weather}
                            initialParams={{ name: city?.name || "hg" }}
                        />
                    ))
                ) : (
                    <Tab.Screen
                        name={"city.name"}
                        component={Weather}
                        initialParams={{ name: "name" }}
                    />
                )}
            </Tab.Navigator>
        </>
    );
}

const style = StyleSheet.create({
    plus: {
        position: "absolute",
        zIndex: 20,
        width: 50,
        height: 50,
        backgroundColor: "rgba(255,255,255, 0.3)",
        borderRadius: 50,
        left: 20,
        bottom: 20,
        overflow: "hidden",
    },
    text: {
        position: "relative",
        left: 11,
        right: 10,
        top: -11,
        bottom: 10,
        fontSize: 50,
        color: "white",
    },
});
