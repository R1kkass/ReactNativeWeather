import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useEffect, useState} from 'react'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Tabs from './pages/Tabs';
import { IWeatherApi, WeaterApi } from './app/api/WeatherApi';
import Search from './pages/Search/Search';
import { Provider } from 'react-redux';
import { setupStore } from './app/redux/store';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from './app/redux/hooks';
import { setCity } from './app/redux/WeatherSlice';
import WrapperCity from './wrapperCity';
import WeatherDay from './pages/WeatherDay/WeatherDay';
import CityList from './pages/CityList/CityList';
import Map from './pages/Map/Map';

const Stack = createNativeStackNavigator();

const store = setupStore()

export default function App() {


  return (
    <Provider store={store}>
      <WrapperCity/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Home" component={Tabs} />
          <Stack.Screen name="Add" options={{title:"Добавить город"}} component={Search}/>
          <Stack.Screen name="WeatherDay" options={{title:"Прогноз на 7 дней"}} component={WeatherDay}/>
          <Stack.Screen name="Map" options={{title:"Карта"}} component={Map}/>
          
          <Stack.Screen name="AllCity" options={{title:"Города"}} component={CityList}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden = {false} translucent = {false}/>
    </Provider>
  );
}

