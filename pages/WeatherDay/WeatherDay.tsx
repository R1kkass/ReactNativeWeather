import { styled } from "styled-components/native";
import { Dimensions, ScrollView } from "react-native";
import { FC, Fragment, useLayoutEffect, useState } from "react";
import { IWeatherDay } from "./interface";
import { rounded } from "../../app/utils/formats";
import dayjs from "dayjs";
import Svg, {
    Rect,
} from "react-native-svg";
import Stroke from "../../entities/Stroke/Stroke";
import TextSvg from "../../entities/TextSvg/TextSvg";
import TextWeather from "../../entities/TextWeather/TextWeather";
import WindSvg from "../../entities/WindSvg/WindSvg";

let width = 100 / 9;
let widthFull = Dimensions.get("window").width / 7;

const WeatherDay: FC<IWeatherDay> = ({ route }) => {
    const daily = route.params.daily;

    useLayoutEffect(() => {
        let res = [];
        let res2 = [];
        let res3 = [];
        for (let i = 0; i < daily?.length; i++) {
            res.push(rounded(daily[i].temp.day));
            res3.push(rounded(daily[i].temp.night));
            res2.push(`${dayjs(daily[i].dt * 1000).format("DD.MM")}`);
        }
    }, []);

    return (
        <ScrollView
            horizontal={true}
        >
            <WeatherView>
                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <Rect width="10" height="60" y="0" fill="rgba(0,0,0,0.1)" rx="2" x="6" />                        
                    {daily?.map((day, index) => (
                        <Fragment key={day.dt}>
                            <TextWeather
                                index={index}
                                day={day}
                                width={width}
                            />
                            <WindSvg index={index} day={day} width={width} />
                            <Stroke
                                day={day}
                                index={index}
                                daily={daily}
                                minus={80}
                                type="day"
                            />
                            <TextSvg
                                daily={daily}
                                type="day"
                                day={day}
                                index={index}
                                minus={-76}
                            />
                        </Fragment>
                    ))}
                    {daily?.map((day, index) => (
                        <Fragment key={day.dt}>
                            <Stroke
                                day={day}
                                index={index}
                                daily={daily}
                                minus={100}
                                type="night"
                            />
                            <TextSvg
                                type="night"
                                daily={daily}
                                day={day}
                                index={index}
                                minus={-108}
                            />
                        </Fragment>
                    ))}
                </Svg>
            </WeatherView>
        </ScrollView>
    );
};

const WeatherView = styled.View`
    background: white;
    width: ${9 * widthFull}px;
    display: flex;
    flex-direction: row;
`;


export default WeatherDay;
