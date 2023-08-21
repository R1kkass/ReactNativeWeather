import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { primary } from "../../app/const/color";
import { useEffect, useState } from "react";

const CheckBoxCity = ({ visible, callback }) => {
    const translateX = useSharedValue(70);
    const handlePress = (num: number) => {
        translateX.value = num;
    };
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (visible) {
            handlePress(-30);
        } else if (!visible) {
            handlePress(70);
            setCheck(false);
        }
    }, [visible]);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value) }],
    }));

    function myCallback() {
        callback();
        setCheck(!check);
    }

    return (
        <Animated.View style={[animatedStyles, { marginLeft: "auto", position: !visible ? 'relative' : 'relative', left: "0%", maxWidth: 30 }]}>
            <BouncyCheckbox
                isChecked={check}
                disableBuiltInState
                onPress={myCallback}
                size={40}
                fillColor={primary()}
                style={{ marginLeft: "auto" }}
                textStyle={{ fontSize: 20 }}
            />
        </Animated.View>
    );
};

export default CheckBoxCity;
