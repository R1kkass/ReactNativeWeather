import { Image, TSpan, Text } from "react-native-svg";

const WindSvg = ({index, day, width}) => {
    return (
        <Text fontSize="2">
            <Image
                y={`50`}
                x={`${(index + 1) * width - 5.5}`}
                href={`https://img.icons8.com/?size=512&id=eXNlsYb8fhJG&format=png`}
                height="2.5"
                width="2.5"
            />
            <TSpan fill="gray" x={`${(index + 1) * width - 3}`} y={"52"}>
                {day.wind_speed}м/c
            </TSpan>
        </Text>
    );
};

export default WindSvg