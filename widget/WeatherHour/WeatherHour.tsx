import { Path, Rect, Svg } from "react-native-svg";
import { styled } from "styled-components/native";
import { FC } from "react";
import { IWeatherHour } from "./interface";
import { ScrollView, Text, View } from "react-native";

const WeatherHour: FC<IWeatherHour> = ({ oneCall }) => {
    console.log(oneCall.hourly);

    return (
        <WeatherView
            style={{ minWidth: "100%", height: "100%" }}
            horizontal={true}
        >
            <View style={{width: 5800}}>
                <Svg height="100%" width="100%" viewBox="0 0 1440 50">
                    {oneCall?.hourly?.map((call, index) => (
                        <Path
                            d={`M${index * 30},${
                                call.temp - 273.15
                            } q 0 0 30 0`}
                            fill="none"
                            stroke="red"
                            strokeWidth={1}
                        />
                    ))}
                </Svg>
                <Text style={{ fontSize: 100, color: "white" }}>fds</Text>
            </View>
        </WeatherView>
    );
};

export default WeatherHour;

const WeatherView = styled.ScrollView`
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    min-height: 200px;
    margin-top: 10px;
`;
