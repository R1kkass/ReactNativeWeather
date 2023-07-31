import { View, Text } from "react-native";
import { styled } from "styled-components/native";
import { FC, useEffect, useState } from "react";
import { IUnitWeather } from "./interface";
import { rounded, toUpper } from "../../app/utils/formats";
import { dayJS } from "../../app/utils/day";


const UnitWeather: FC<IUnitWeather> = ({ day, timezone_offset }) => {
    const [days, setDays] = useState("");

    useEffect(() => {
        setDays(dayJS(day.dt))
    }, []);

    return (
        <MyView>
            <Image
                source={{
                    uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                }}
            />
            <MyText>{days} {toUpper(day.weather[0].description)}</MyText>
            <MyText style={{ marginLeft: "auto" }}>
                {rounded(day.temp.day)}° / {rounded(day.temp.night)}°
            </MyText>
        </MyView>
    );
};

export default UnitWeather;

const MyText = styled.Text`
    font-weight: 700;
    color: white;
    font-size: 17px;
`;

const MyView = styled.View`
    display: flex;
    flex-direction: row;
    wdith: 100%;
    align-items: center;
    height: 40px;
`;

const Image = styled.Image`
    width: 45px;
    height: 100%;
`;
