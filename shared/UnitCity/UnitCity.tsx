import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FC } from "react";
import { IUnitCity } from "./interface";
import { rounded } from "../../app/utils/formats";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { initCity, setCity } from "../../app/redux/WeatherSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UnitCity: FC<IUnitCity> = ({ city }) => {
    const dispatch = useAppDispatch();
    const cities = useAppSelector((state) => state.cityReducer.city);
    async function cityAdd() {
        let a = cities.find((citys) => {
            return citys.id == city.id;
        });
        if (!a) {
            const res = JSON.parse(
                (await AsyncStorage.getItem("city")) || "[]"
            );
            res.push({
                name: city.name,
                id: city.id,
                country: city.sys.country,
            });
            dispatch(initCity(res));
            await AsyncStorage.setItem("city", JSON.stringify(res));
        }
    }

    return (
        <TouchableOpacity onPress={cityAdd}>
            <View style={styles.unit}>
                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`,
                        }}
                    />
                    <Text>
                        {city.name}, {city.sys.country}
                    </Text>
                </View>
                <View style={styles.textUnit}>
                    <View>
                        <Text>{rounded(city.main.temp)}</Text>
                        <Text>Ветер: {city.wind.speed}м/с</Text>
                        <Text>Облака: {city.clouds.all}%</Text>
                    </View>
                    <View>
                        <Text>Координаты: </Text>
                        <Text>Ширина: {city.coord.lat}</Text>
                        <Text>Высота: {city.coord.lon}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default UnitCity;

const styles = StyleSheet.create({
    unit: {
        height: "auto",
        padding: 5,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        gap: 10,
    },
    textUnit: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        gap: 10,
    },
    image: {
        height: 60,
        width: 60,
    },
});
