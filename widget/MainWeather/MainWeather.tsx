import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { IUnitCity } from "../../shared/UnitCity/interface";
import { IHumidity } from "../../shared/Humidity/interface";
import { rounded, toUpper } from "../../app/utils/formats";

const halfWindowsWidth = Dimensions.get("window").height - 300;

const MainWeather: FC<IHumidity> = ({ weather, oneCall }) => {

    return (
        <View style={style.main}>
            <Image
                style={style.img}
                source={{
                    uri: `https://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@4x.png`,
                }}
            />
            <Text style={style.text}>
                {rounded(weather?.main.temp)}
                <View style={style.degView}>
                    <Text style={style.deg}>°C</Text>
                </View>
            </Text>
            <Text style={style.minMax}>
                {toUpper(weather.weather[0].description)}{" "}
                {rounded(oneCall?.daily?.[0].temp.day)}° /{" "}
                {rounded(oneCall?.daily?.[0].temp.night)}°
            </Text>
        </View>
    );
};

export default MainWeather;

const style = StyleSheet.create({
    main: {
        height: halfWindowsWidth,
        display: "flex",
        justifyContent: "center",
    },
    minMax: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    },
    img: {
        width: "100%",
        height: 200,
    },
    text: {
        fontSize: 70,
        color: "white",
        textAlign: "center",
        position: "relative",
    },
    degView: {},
    deg: {
        fontSize: 25,
        color: "white",
    },
});
