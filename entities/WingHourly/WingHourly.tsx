import { TSpan, Text } from "react-native-svg"

const WingHourly = ({text, index}) => {
    return (
        <Text x={index*25-3} y={44} fill={"white"} fontSize={"2.3"}>
            <TSpan>{text}м/c</TSpan>
        </Text>
    )
}

export default WingHourly