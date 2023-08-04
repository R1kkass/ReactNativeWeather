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
import { rounded } from "../../app/utils/formats";

let width = 100 / 9;

const TextSvg = ({ day, daily, index, minus, type }) => {
    return (
        <Text fontSize="2.8">
            <TSpan
                y={`${(day?.temp?.[type] - 273.15 + minus) *-1 / 2.5} `}
                x={`${(index + 1) * width - 1.5}`}
                fill="black"
            >
                {rounded(day.temp?.[type])}°
            </TSpan>
        </Text>
    );
};

export default TextSvg