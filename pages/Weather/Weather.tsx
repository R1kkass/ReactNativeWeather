import {
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { IWeatherApi, IWeatherOneCallApi, WeaterApi, WeaterApiCallOne } from "../../app/api/WeatherApi";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { rounded, toUpper } from "../../app/utils/formats";
import { primary } from "../../app/const/color";
import Wind from "../../shared/Wind/Wind";
import { LinearGradient } from "expo-linear-gradient";
import { gradient } from "../../app/utils/gradient";
import { useAppSelector } from "../../app/redux/hooks";
import Humidity from "../../shared/Humidity/Humidity";
import Daily from "../../widget/Daily/Daily";
import MainWeather from "../../widget/MainWeather/MainWeather";

const Weather = ({ route, navigation }) => {
    const isFocused = useIsFocused();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [oneCall, setOneCall] = useState<IWeatherOneCallApi>()
    const [weather, setWeather] = useState<IWeatherApi>();
    useEffect(() => {
        fetchWeather();
    }, [isFocused]);

    function fetchWeather() {
        if (isFocused) {
            setIsLoading(true);
            WeaterApi(route.params.name)
                .then(async (e) => {
                    setWeather(e);
                    setIsLoading(false);
                    setOneCall(await WeaterApiCallOne(e.coord.lat, e.coord.lon))
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
                    <Daily navigation={navigation} oneCall = {oneCall}/>

                    <View style={styles.fisrstLine}>
                        <Wind weather={weather} />
                        <Humidity weather={weather} />
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default Weather;

const styles = StyleSheet.create({
    scroll: {
        height: 1000,
        width: "100%",
        paddingTop: 40,
        color: "white",
        backgroundColor: primary(),
    },

    minMax: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: 5,
        paddingRight: 5,
        gap: 15,
    },
    fisrstLine: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
