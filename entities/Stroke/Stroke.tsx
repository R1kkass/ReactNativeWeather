import { rounded } from "../../app/utils/formats";
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

const Stroke = ({ index, daily, day, minus, type }) => {
    return (
        <>
            <Polyline
                stroke={`rgb(${Math.round(Math.random() * 255)},${Math.round(
                    Math.random() * 255
                )},${Math.round(Math.random() * 255)})`}
                strokeWidth={0.3}
                fill="red"
                points={`${index * 12.5},${
                    (day?.temp?.[type] - 273.15 - Number(minus)) * -1
                } ${(index + 1) * 12.5},${
                    (daily?.[index + 1 <= daily?.length - 1 ? index + 1 : index]
                        .temp?.[type] -
                        273.15 -
                        Number(minus)) *
                    -1
                }`}
            />
            <Circle
                cx={index * 12.5}
                cy={
                    (daily?.[index]
                        .temp?.[type] -
                        273.15 -
                        Number(minus)) *
                    -1
                }
                r="2"
                fill={"red"}
            />
            <Circle
                cx={index * 12.5}
                cy={
                    (daily?.[index]
                        .temp?.[type] -
                        273.15 -
                        Number(minus)) *
                    -1
                }
                r="1"
                fill={"white"}
            />
        </>
    );
};

export default Stroke;
