import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./pages/Tabs";
import Search from "./pages/Search/Search";
import { Provider } from "react-redux";
import { setupStore } from "./app/redux/store";
import WrapperCity from "./wrapperCity";
import WeatherDay from "./pages/WeatherDay/WeatherDay";
import CityList from "./pages/CityList/CityList";
import Map from "./pages/Map/Map";
import { QueryClient, QueryClientProvider } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const store = setupStore();

const queryClient = new QueryClient();

export default function App() {
    const deleteArray =async () => {
        // let a = [...cities]
        // for(let i =0; i<array.length; i++){
        //     a.push(...cities.filter(city=>{
        //         return city.id !=array[i]
        //     }))
        //     console.log(a);
        // }
        // console.log(a);
        await AsyncStorage.setItem('city', JSON.stringify([]))

        // dispatch(initCity(a))
    }
    // AsyncStorage.setItem('city', JSON.stringify([]))

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <WrapperCity />
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Home"
                            component={Tabs}
                        />
                        <Stack.Screen
                            name="Add"
                            options={{ title: "Добавить город" }}
                            component={Search}
                        />
                        <Stack.Screen
                            name="WeatherDay"
                            options={{ title: "Прогноз на 7 дней" }}
                            component={WeatherDay}
                        />
                        <Stack.Screen
                            name="Map"
                            options={{ title: "Карта" }}
                            component={Map}
                        />

                        <Stack.Screen
                            name="AllCity"
                            options={{ title: "Города" }}
                            component={CityList}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar hidden={false} translucent={false} />
            </Provider>
        </QueryClientProvider>
    );
}
