import { Path, Rect, Svg } from "react-native-svg";
import { styled } from "styled-components/native";
import { FC, Fragment } from "react";
import { IWeatherHour } from "./interface";
import { ScrollView, Text, View } from "react-native";
import TextWeather from "../../entities/TextWeather/TextWeather";
import WindSvg from "../../entities/WindSvg/WindSvg";
import Stroke from "../../entities/Stroke/Stroke";
import TextSvg from "../../entities/TextSvg/TextSvg";
import StrokeHourly from "../../entities/Stroke/StrokeHourly";
import TextSvgHourly from "../../entities/TextSvg/TextSvgHourly";
import TextWeatherHourly from "../../entities/TextWeather/TextWeatherHourly";
import WingHourly from "../../entities/WingHourly/WingHourly";

const WeatherHour: FC<IWeatherHour> = ({ oneCall }) => {
    return (
        <WeatherView>
            <TextDay>
                Прогноз на 48 ч
            </TextDay>
            <ScrollView
                style={{ minWidth: "100%", height: 200 }}
                horizontal={true}
            >
                <View style={{ width: 4780 }}>
                    <Svg
                        height="100%"
                        width="100%"
                        style={{ marginLeft: -70 }}
                        viewBox="0 0 1195 50"
                    >
                        {oneCall?.hourly?.map((call, index) => (
                            <Fragment key={call.dt}>
                                <TextWeatherHourly
                                    index={index}
                                    day={call}
                                    timezone={oneCall.timezone_offset}
                                    width={25}
                                />
                                {/* <WindSvg index={index} day={call} width={35} /> */}
                                <StrokeHourly
                                    day={call}
                                    index={index}
                                    daily={oneCall.hourly}
                                    minus={80}
                                    type="day"
                                />
                                <TextSvgHourly
                                    daily={oneCall.hourly}
                                    type="day"
                                    day={call}
                                    index={index}
                                    minus={200}
                                />
                                <WingHourly
                                    index={index}
                                    text={call.wind_gust}
                                />
                            </Fragment>
                        ))}
                    </Svg>
                </View>
            </ScrollView>
        </WeatherView>
    );
};

export default WeatherHour;

const TextDay = styled.Text<{ opacity?: number }>`
    color: rgba(
        255,
        255,
        255,
        ${(props) => (props.opacity ? props.opacity : 0.6)}
    );
    font-weight: 700;
    font-size: 16px;
    padding: 10px;
`;

const WeatherView = styled.View`
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    min-height: 200px;
`;
