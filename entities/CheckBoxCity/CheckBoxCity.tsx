import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { primary } from "../../app/const/color";
import { useEffect } from "react";

const CheckBoxCity = ({ visible, callback }) => {
    const translateX = useSharedValue(70);
    const handlePress = (num: number) => {
        translateX.value = num;
    };

    useEffect(() => {
        if (visible) {
            handlePress(0);
        } else if (!visible) {
            handlePress(70);
        }
    }, [visible]);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value) }],
    }));

    return (
        <Animated.View style={[animatedStyles, {marginLeft: 'auto'}]}>
            <BouncyCheckbox
                onPress={callback}
                size={40}
                fillColor={primary()}
                style={{ marginLeft: "auto" }}
                textStyle={{ fontSize: 20 }}
            />
        </Animated.View>
    );
};

export default CheckBoxCity;
