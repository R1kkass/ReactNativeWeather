import { Image, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native"
import { IWeatherApi, WeaterApi } from "../../app/api/WeatherApi"
import {useState, useEffect, useCallback} from 'react'
import {useFocusEffect,useIsFocused} from "@react-navigation/native"
import { rounded, toUpper } from "../../app/utils/formats"
import { primary } from "../../app/const/color"
import Wind from "../../shared/Wind/Wind"
import { LinearGradient } from "expo-linear-gradient"
import { gradient } from "../../app/utils/gradient"
import { useAppSelector } from "../../app/redux/hooks"

const Weather = ({route}) => {

  const isFocused = useIsFocused();
    
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather] = useState<IWeatherApi>()
  useEffect(()=>{
    fetchWeather()
  },[isFocused])

  function fetchWeather() {
    
    if(isFocused){
        setIsLoading(true)
        console.log(
            `https://api.openweathermap.org/data/2.5/weather?q=${route.params.name}&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`)
        WeaterApi(route.params.name).then(e=>{
            setWeather(e)
            setIsLoading(false)
        }).catch(e=>{
            setIsLoading(false)
        })
    console.log(weather);
    }
  }

  const cities2 = useAppSelector(state=>state.cityReducer.city)


  if(!weather) {
    return (
      <ScrollView style={styles.scroll} refreshControl={<RefreshControl colors={[primary()]} refreshing={isLoading} onRefresh={()=>fetchWeather()}/>}>
        <Text>{JSON.stringify(cities2)}</Text>
      </ScrollView>
    )
  }

  return (
      <ScrollView  refreshControl={<RefreshControl colors={[primary()]} refreshing={isLoading} onRefresh={()=>fetchWeather()}/>}>
        <LinearGradient style={styles.scroll} colors={gradient(weather.weather[0].icon)}>
            <Image style={styles.img} source={{uri: `https://openweathermap.org/img/wn/${
                        weather?.weather?.[0].icon
                    }@4x.png`}}/>
            <Text style={styles.text}>{rounded(weather?.main.temp)}<View style={styles.degView}><Text style={styles.deg}>°C</Text></View></Text>
            <Text style={styles.minMax}>
                {
                    toUpper(weather.weather[0].description)
                } {" "}
                {
                    rounded(weather?.main.temp_min)
                }° / {
                    rounded(weather?.main.temp_max)
                }°
            </Text>
            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row'}}>
                <View style={{width: '100%'}}>
                    <Wind weather={weather}/>
                    <View></View>
                </View>
                <View></View>
            </View>
        </LinearGradient>
      </ScrollView>
  );
}

export default Weather

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200
    },
    scroll: {
        height: 1000,
        width: '100%',
        paddingTop: 20,
        color: 'white',
        backgroundColor: primary()
    },
    text: {
        fontSize: 70,
        color: 'white',
        textAlign: 'center',
        position: 'relative'
    },
    degView: {
    },
    deg: {
        fontSize: 25,
        color: 'white'
    },
    minMax: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})