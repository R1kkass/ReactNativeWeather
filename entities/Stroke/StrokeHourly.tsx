import { rounded } from "../../app/utils/formats";
import Svg, {
    Circle,
    G,
    Path,
    Polygon,
    Polyline,
    Rect,
    TSpan,
} from "react-native-svg";
import { Text } from "react-native";
import TextSvg from "../TextSvg/TextSvg";
import { primary } from "../../app/const/color";

let width = 25;

const StrokeHourly = ({ index, daily, day, minus, type }) => {
    if (!day || !daily.length) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <Polyline
                stroke={"gray"}
                strokeWidth={1}
                fill="red"
                points={`${index === 0 ? 0 : index * width},${
                    ((day?.temp - 273.15 - Number(minus)) * -1) / 2.5 - 10
                } ${(index + 1) * width},${
                    ((daily?.[
                        index + 1 <= daily?.length - 1 ? index + 1 : index
                    ].temp -
                        273.15 -
                        Number(minus)) *
                        -1) /
                    2.5 - 10
                }`}
            />
            {/* <Circle
                cx={(index + 1) * width}
                cy={
                    ((daily?.[index]?.temp - 273.15 - Number(minus)) * -1) / 2.5 - 10
                }
                r="2.2"
                fill={primary()}
                
            />
            <Circle
                cx={(index + 1) * width}
                cy={
                    ((daily?.[index]?.temp - 273.15 - Number(minus)) * -1) / 2.5 - 10
                }
                r="1.5"
                fill={"white"}
            /> */}
        </>
    );
};

export default StrokeHourly;
