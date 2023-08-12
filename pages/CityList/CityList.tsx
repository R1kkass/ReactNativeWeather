import { Dimensions, View } from "react-native";
import { useAppSelector } from "../../app/redux/hooks";
import { styled } from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import AllCityUnit from "../../shared/AllCityUnit/AllCityUnit";
import { useState } from "react";

const height = Dimensions.get('window').height/7

const CityList = ({ navigation }) => {
    const cities = useAppSelector((state) => state.cityReducer.city);
    const [visible, setVisible] = useState(false)

    return (
        <ScrollView style={{minHeight: 1000}}>
            <ViewContainer>
                <TouchableOpacity onPress={()=>navigation.navigate('Add')}>
                    <ViewSearch>
                        <TextCity>Введите местоположение</TextCity>
                    </ViewSearch>
                </TouchableOpacity>
                {cities?.map((city) => (
                    <AllCityUnit callback = {()=>setVisible(p=>!p)} visible={visible} city={city} />
                ))}
                    <ButtonDelete />

            </ViewContainer>
        </ScrollView>
    );
};

export default CityList;

const CityView = styled.View`
    width: 100%;
    height: ${height}px;
    border-radius: 20px;
    background: white;
    overflow: hidden;
    padding: 10px;
    display: flex;
    justify-content: center;
    elevation: 3;
`;

const ViewContainer = styled.View`
    width: 100%;
    dislay: flex;
    gap: 10px;
    height: 100%;
    padding: 10px;
    padding: 10px;
`;

const TextCity = styled.Text`
    font-size: 20px;
    color: rgb(10,10,10);
`;

const ViewSearch = styled.View`
    height: 40px;
    background: rgba(258, 208,208, 0.1);
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    border: 1px solid gray;
    elevation: 3;
`;

const ButtonDelete = styled.View`
    position: fixed;
    top: 0;
    width: 100%;
    flex: 1;
    height: 200px;
    background: white;
    left: 0;
`;