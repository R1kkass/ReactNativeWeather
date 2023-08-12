import dayjs from "dayjs";
import { TSpan, Text, Image } from "react-native-svg";

const TextWeatherHourly = ({ index, width, day, timezone }) => {
    return (
        <Text fontSize="3.5">
            <TSpan y={`48`} x={`${(index + 1) * width - 4}`} fill="white">
                {dayjs(day.dt * 1000 - timezone).format("HH:00")}
            </TSpan>
            <Image
                y={`33`}
                x={`${(index + 1) * width - 5}`}
                href={`https://openweathermap.org/img/wn/${day?.weather?.[0].icon}@4x.png`}
                height="10"
                width="10"
            />
        </Text>
    );
};

export default TextWeatherHourly;
