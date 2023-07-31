import { styled } from "styled-components/native";
import { MyWind } from "../MyWind/MyWind";
import { Text, View, StyleSheet } from "react-native";
import { FC } from "react";
import { IHumidity } from "./interface";
import { rounded } from "../../app/utils/formats";

const Humidity: FC<IHumidity> = ({ weather }) => {
    return (
        <MyWind>
            <View style={style.row}>
                <MyText>Влажность </MyText>
                <MyText weight={true}>{weather.main.humidity}%</MyText>
            </View>
            <View style={style.row}>
                <MyText>Ощущается </MyText>
                <MyText weight={true}>
                    {rounded(weather.main.feels_like)}°
                </MyText>
            </View>
            <View style={style.row}>
                <MyText>Давление </MyText>
                <MyText weight={true}>{weather.main.pressure}mmHg</MyText>
            </View>
            <View style={style.row}>
                <MyText>Облака </MyText>
                <MyText weight={true}> {weather.clouds.all}%</MyText>
            </View>
        </MyWind>
    );
};

const MyText = styled.Text<{ weight?: boolean }>`
    color: white;
    font-size: ${(props) => (props.weight ? "17" : "14")};
`;

export default Humidity;

const style = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.3)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
