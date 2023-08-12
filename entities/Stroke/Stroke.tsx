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
import TextSvg from "../TextSvg/TextSvg";
import { primary } from "../../app/const/color";

let width = 100 / 9;

const Stroke = ({ index, daily, day, minus, type }) => {

    if(!day || !daily.length) {
        return <Text>Loading...</Text>
    }

    if (index == 0) {
        return (
            <>
                <Polyline
                    strokeWidth={0.3}
                    stroke={'gray'}
                    fill="red"
                    points={`0,${
                        (rounded(daily?.[0]?.temp?.[type]) - minus) * -1 / 2.5
                    } ${width},${(rounded(daily[0].temp?.[type]) - minus) * -1 / 2.5}`}
                />
                 <Polyline
                stroke={'gray'}
                strokeWidth={0.3}
                fill="red"
                points={`${(index + 1) * width},${
                    (day?.temp?.[type] - 273.15 - Number(minus)) * -1 / 2.5
                } ${(index + 2) * width},${
                    (daily?.[index + 2 <= daily?.length - 1 ? index + 1 : index]
                        .temp?.[type] -
                        273.15 -
                        Number(minus)) *
                    -1 / 2.5
                }`}
            />
            <Circle
                cx={(index+1) * width}
                cy={(daily?.[index]?.temp?.[type] - 273.15 - Number(minus)) * -1 / 2.5}
                r="1.2"
                fill={primary()}
            />
            <Circle
                cx={(index+1) * width}
                cy={(daily?.[index]?.temp?.[type] - 273.15 - Number(minus)) * -1 / 2.5}
                r="0.5"
                fill={"white"}
            />
            </>
        );
    }

    return (
        <>
                  <Polyline
                stroke={'gray'}
                strokeWidth={0.3}
                fill="red"
                points={`${(index + 1) * width},${
                    (day?.temp?.[type] - 273.15 - Number(minus)) * -1 / 2.5
                } ${(index + 2) * width},${
                    (daily?.[index + 1 <= daily?.length - 1 ? index + 1 : index]
                        .temp?.[type] -
                        273.15 -
                        Number(minus)) *
                    -1 / 2.5
                }`}
            />
           <Circle
                cx={(index+1) * width}
                cy={(daily?.[index].temp?.[type] - 273.15 - Number(minus)) * -1 / 2.5}
                r="1.2"
                fill={primary()}
            />
            <Circle
                cx={(index+1) * width}
                cy={(daily?.[index].temp?.[type] - 273.15 - Number(minus)) * -1 / 2.5}
                r="0.5"
                fill={"white"}
            />
        </>
    );
};

export default Stroke;
