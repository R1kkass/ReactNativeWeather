import dayjs from "dayjs";
import { TSpan, Text, Image } from "react-native-svg";

const TextWeather = ({ index, width, day }) => {
    return (
        <Text fontSize="2.5">
            <TSpan y={`11`} x={`${(index + 1) * width - 2.5}`} fill="gray">
                {dayjs(day.dt * 1000).format("DD.MM")}
            </TSpan>
            <Image
                y={`0`}
                x={`${(index + 1) * width - 5}`}
                href={`https://openweathermap.org/img/wn/${day?.weather?.[0].icon}@4x.png`}
                height="10"
                width="10"
            />
        </Text>
    );
};

export default TextWeather;
