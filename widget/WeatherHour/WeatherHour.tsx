import { View } from "react-native";
import { Path, Rect, Svg } from "react-native-svg";
import { styled } from "styled-components/native";

const WeatherHour = () => {
    return (
        <WeatherView>
            <Svg height="100%" width="100%" viewBox="0 0 100 100">
                <Path
                    d="M10,20 C10,10 25,10 25,20 25,30 40,30 40,20"
                    fill="none"
                    stroke="red"
                    strokeWidth={3}
                />
                <Path
                    d="M40,20 C10,10 55,50 55,50 S 80,30 80,20"
                    fill="none"
                    stroke="blue"
                    strokeWidth={3}
                />
            </Svg>
        </WeatherView>
    );
};

export default WeatherHour;

const WeatherView = styled.View`
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    height: 200px;
    margin-top: 10px;
`;
