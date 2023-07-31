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

const TextSvg = ({ day, daily, index, minus, type }) => {
    return (
        <Text fontSize="4">
            <TSpan
                y={`${(day?.temp?.[type] - 273.15 + minus) *-1} `}
                x={`${index * 12.5 - 2.5}`}
                fill="black"
            >
                {rounded(day.temp?.[type])}
            </TSpan>
        </Text>
    );
};

export default TextSvg