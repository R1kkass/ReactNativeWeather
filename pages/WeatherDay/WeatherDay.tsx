import { styled } from "styled-components/native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { IWeatherDay } from "./interface";
import { rounded } from "../../app/utils/formats";
import dayjs from "dayjs";
import { primary } from "../../app/const/color";
import Svg, {
    Circle,
    G,
    Path,
    Polygon,
    Polyline,
    Rect,
    Text,
    TSpan,
} from "react-native-svg";
import Stroke from "../../entities/Stroke/Stroke";
import TextSvg from "../../entities/TextSvg/TextSvg";

let width = 100 / 8;

const WeatherDay: FC<IWeatherDay> = ({ route }) => {
    const daily = route.params.daily;
    const [labels, setLabels] = useState<Array<string> | null>();
    const [data, setData] = useState<Array<number> | null>();
    const [data2, setData2] = useState<Array<number> | null>();

    useLayoutEffect(() => {
        let res = [];
        let res2 = [];
        let res3 = [];
        for (let i = 0; i < daily?.length; i++) {
            res.push(rounded(daily[i].temp.day));
            res3.push(rounded(daily[i].temp.night));

            res2.push(`${dayjs(daily[i].dt * 1000).format("DD.MM")}`);
        }
        console.log(daily.length);
        setLabels(res2);
        setData(res);
        setData2(res3);
    }, []);

    return (
        <>
            <WeatherView>
                {daily?.map((day, index) => (
                    <MiniView>{/* <Text>{day.dt}</Text> */}</MiniView>
                ))}
            </WeatherView>
            <Svg height="100%" width="100%" viewBox="0 0 100 100">
                <Polyline
                    strokeWidth={0.3}
                    stroke="black"
                    fill="red"
                    points={`0,10 10,20`}
                />
                {daily?.map((day, index) => (
                    
                    <>
                        <Stroke
                            day={day}
                            index={index}
                            daily={daily}
                            minus={0}
                            type="day"
                        />
                        <TextSvg
                            daily={daily}
                            type="day"
                            day={day}
                            index={index}
                            minus={5}
                        />
                    </>
                ))}
                {daily?.map((day, index) => (
                    <>
                        <Stroke
                            day={day}
                            index={index}
                            daily={daily}
                            minus={30}
                            type="night"
                        />
                        <TextSvg
                            type="night"
                            daily={daily}
                            day={day}
                            index={index}
                            minus={-35}
                        />
                    </>
                ))}
            </Svg>
            <WeatherView />
        </>
    );
};

const WeatherView = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 50px;
    background: red;
`;

const MiniView = styled.View`
    width: 12.5%;
    background: white;
    border: 1px solid;
`;

export default WeatherDay;
