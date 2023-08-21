import {
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import {
    IWeatherApi,
    IWeatherOneCallApi,
    WeaterApi,
    WeaterApiCallOne,
    WeaterApiId,
} from "../../app/api/WeatherApi";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { primary } from "../../app/const/color";
import Wind from "../../shared/Wind/Wind";
import { LinearGradient } from "expo-linear-gradient";
import { gradient } from "../../app/utils/gradient";
import { useAppSelector } from "../../app/redux/hooks";
import Humidity from "../../shared/Humidity/Humidity";
import Daily from "../../widget/Daily/Daily";
import MainWeather from "../../widget/MainWeather/MainWeather";
import WeatherHour from "../../widget/WeatherHour/WeatherHour";
import { styled } from "styled-components/native";
import { styles } from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Weather = ({ route, navigation }) => {
    const isFocused = useIsFocused();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [oneCall, setOneCall] = useState<IWeatherOneCallApi>();
    const [weather, setWeather] = useState<IWeatherApi>();

    useEffect(() => {
        fetchWeather();
    }, [isFocused]);

    function fetchWeather() {
        if (isFocused) {
            setIsLoading(true);
            WeaterApiId(route.params.id)
                .then(async (e) => {
                    setWeather(e);
                    let a = await WeaterApiCallOne(e.coord.lat, e.coord.lon)
                    await AsyncStorage.setItem('oneCall', JSON.stringify(a))
                    setOneCall(
                        a
                    );
                    setIsLoading(false);
                })
                .catch((e) => {
                    setIsLoading(false);
                });
        }
    }

    const cities2 = useAppSelector((state) => state.cityReducer.city);

    if (!weather || !oneCall) {
        return (
            <ScrollView
                style={styles.scroll}
                refreshControl={
                    <RefreshControl
                        colors={[primary()]}
                        refreshing={isLoading}
                        onRefresh={() => fetchWeather()}
                    />
                }
            >
                <Text>{JSON.stringify(cities2)}</Text>
            </ScrollView>
        );
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    colors={[primary()]}
                    refreshing={isLoading}
                    onRefresh={() => fetchWeather()}
                />
            }
        >
            <LinearGradient
                style={styles.scroll}
                colors={gradient(weather.weather[0].icon)}
            >
                <MainWeather oneCall={oneCall} weather={weather} />
                

                <View style={styles.container}>
                    <Daily navigation={navigation} oneCall={oneCall} />
                    <WeatherHour oneCall={oneCall} />

                    <View style={styles.fisrstLine}>
                        <Wind weather={weather} />
                        <Humidity weather={weather} />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Map", { weather })}
                >
                    <Text>Карта</Text>
                </TouchableOpacity>
            </LinearGradient>
        </ScrollView>
    );
};

export default Weather;

