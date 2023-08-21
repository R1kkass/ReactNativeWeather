import { useEffect, useLayoutEffect, useState } from "react";
import { styled } from "styled-components/native";
import { IWeatherApi, WeaterApiId } from "../../app/api/WeatherApi";
import { colorSet, gradient } from "../../app/utils/gradient";
import { Dimensions, Image, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { primary } from "../../app/const/color";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import CheckBoxCity from "../../entities/CheckBoxCity/CheckBoxCity";
import { useMutation, useQuery } from "react-query";

const height = Dimensions.get("window").height / 10;

const AllCityUnit = ({ city, visible, callback, push }) => {
    const {
        data: weather,
        isLoading,
        isError,
    } = useQuery({
        queryKey: city.id,
        queryFn: () => WeaterApiId(city.id),
    });

    const translateX = useSharedValue(-70);
    const handlePress = (num: number) => {
        translateX.value = num;
    };
    console.log(weather);

    useEffect(() => {
        if (visible) {
            handlePress(0);
        } else if (!visible) {
            handlePress(-70);
        }
    }, [visible]);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value) }],
    }));

    if (isLoading) {
        return <TextCity>Загрузка...</TextCity>;
    }

    if (isError) {
        return <TextCity>Ошибка</TextCity>;
    }

    return (
        <CityView
            onLongPress={callback}
            color={colorSet(weather?.weather?.[0].icon)}
            key={city.id}
        >
            <Animated.View
                style={[
                    animatedStyles,
                    { position: !visible ? "absolute" : "relative" },
                ]}
            >
                <Image source={require("../../assets/burger.png")} />
            </Animated.View>
            <View>
                <TextCity>{weather.name}</TextCity>
            </View>

            <View style={{marginLeft: 'auto'}}>
                <TextWeather>{weather.main.temp}</TextWeather>
            </View>
            <CheckBoxCity callback={() => push(city.id)} visible={visible} />
        </CityView>
    );
};

export default AllCityUnit;

const TextWeather = styled.Text`
    font-size: 24px;
    color: white;
`;

const TextCity = styled.Text`
    font-size: 23px;
    color: white;
`;

const CityView = styled.TouchableOpacity<{ color: string | undefined }>`
    width: 100%;
    height: ${height}px;
    border-radius: 20px;
    background: ${(props) => (props.color ? props.color : "white")};
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    elevation: 3;
`;
