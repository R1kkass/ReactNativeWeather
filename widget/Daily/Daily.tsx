import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import UnitWeather from "../../shared/UnitWeather/UnitWeather";
import { FC, useEffect } from "react";
import { IDaily } from "./interface";

const Daily: FC<IDaily> = ({ oneCall, navigation }) => {

    return (
        <DailyView onPress={() => navigation.navigate("WeatherDay", {daily: oneCall.daily})}>
            <TextDay>Прогноз на 7 дней</TextDay>
            {oneCall?.daily.slice(0, 3).map((day) => (
                <UnitWeather
                    timezone_offset={oneCall?.timezone_offset}
                    day={day}
                />
            ))}
            <ViewButton>
                <TextDay opacity={1}>Прогноз на 7 дней</TextDay>
            </ViewButton>
        </DailyView>
    );
};

export default Daily;

const DailyView = styled.TouchableOpacity`
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    padding: 10px;
`;

const TextDay = styled.Text<{ opacity?: number }>`
    color: rgba(
        255,
        255,
        255,
        ${(props) => (props.opacity ? props.opacity : 0.6)}
    );
    font-weight: 700;
    font-size: 16px;
`;

const ViewButton = styled.View`
    width: 100%;
    background: rgba(255, 255, 255, 0.35);
    height: 40px;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
