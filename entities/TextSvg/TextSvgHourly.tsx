import Svg, {
    Text,
    TSpan,
} from "react-native-svg";
import { rounded } from "../../app/utils/formats";

let width = 25;

const TextSvgHourly = ({ day, daily, index, minus, type }) => {
    return (
        <Text fontSize="4.2">
            <TSpan
                y={`${(day?.temp - 273.15 - 68) *-1 / 2.5 - 10} `}
                x={`${(index + 1) * width - 2.5}`}
                fill="white"
            >
                {rounded(day?.temp)}°
            </TSpan>
        </Text>
    );
};

export default TextSvgHourly