import { useEffect, useLayoutEffect, useState } from "react";
import { styled } from "styled-components/native";
import { IWeatherApi, WeaterApiId } from "../../app/api/WeatherApi";
import { colorSet, gradient } from "../../app/utils/gradient";
import { Dimensions, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { primary } from "../../app/const/color";

const height = Dimensions.get('window').height / 10

const AllCityUnit = ({ city, visible, callback }) => {
    const [weather, setWeather] = useState<IWeatherApi | null>();
    useLayoutEffect(() => {
        WeaterApiId(city.id).then((e) => {
            setWeather(e);
        });
    }, []);

    return (
        <CityView
            onLongPress={callback}
            color={colorSet(weather?.weather?.[0].icon)}
            key={city.id}
        >
            {visible && <Image source={require("../../assets/burger.png")} />}
            <TextCity>{city.name}</TextCity>
            <Image
                source={require("../../assets/delete.png")}
                width={20}
                height={20}
            />
            {visible && (
                <>
                    <BouncyCheckbox
                        // value={false}
                        size={40}
                        fillColor={primary()}
                        style={{ marginLeft: "auto" }}
                        textStyle={{ fontSize: 20 }}
                        // onValueChange={setSelection}
                        // style={styles.checkbox}
                    />
                </>
            )}
        </CityView>
    );
};

export default AllCityUnit;

const ViewContainer = styled.View`
    width: 100%;
    dislay: flex;
    gap: 10px;
    height: 100%;
    padding: 10px;
    padding: 10px;
`;

const TextCity = styled.Text`
    font-size: 30px;
    color: white;
`;

const CityView = styled.TouchableOpacity<{ color: string | undefined }>`
    width: 100%;
    height: ${height}px;
    border-radius: 20px;
    background: ${(props) => (props.color ? props.color : "white")};
    overflow: hidden;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    elevation: 3;
    position: static;
`;


