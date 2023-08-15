import { styled } from "styled-components/native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

import { useEffect, useRef } from "react";

const ButtonDelete = ({ visisble, callback }) => {
    const translateX = useSharedValue(0);
    const handlePress = (num: number) => {
        translateX.value = num;
    };

    useEffect(() => {
        if(visisble) {
            handlePress(-50);
        } else if (!visisble){
            handlePress(50);
        }
    }, [visisble]);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(translateX.value) }],
    }));

    return (
        <Animated.View style={[animatedStyles]}>
            <ButtonDeletes>
                <TextDelete onPress={callback}>Удалить</TextDelete>
            </ButtonDeletes>
        </Animated.View>
    );
};

export default ButtonDelete;

const ButtonDeletes = styled.View`
    position: fixed;
    top: 0px;
    width: 100%;
    elevation: 2;
    height: 100px;
    background: white;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opcity 0.3s;
`;

const TextDelete = styled.Text`
    font-size: 26px;
`;
