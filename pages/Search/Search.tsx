import { StyleSheet, Button, TextInput, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/index";
import { cityFetch } from "../../app/redux/ActionCreator";
import UnitCity from "../../shared/UnitCity/UnitCity";
import { styled } from "styled-components/native";

const Search = () => {
    const [name, setName] = useState<string>();
    const dispatch = useAppDispatch();
    const cities = useAppSelector((state) => state.cityApiReducer.city);
    const cities2 = useAppSelector((state) => state.cityReducer.city);

    return (
        <View>
            <ViewSearch
                onChangeText={(e) => setName(e)}
                style={style.input}
                placeholder="Введите местоположение"
            ></ViewSearch>
            <Button
                onPress={() => dispatch(cityFetch({ name, citis: cities2 }))}
                title="Поиск"
            ></Button>
            <ScrollView>
                {cities?.list?.map((city) => (
                    <UnitCity key={city.id} city={city}></UnitCity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Search;

const style = StyleSheet.create({
    input: {},
});

const ViewSearch = styled.TextInput`
    height: 40px;
    background: rgba(258, 208, 208, 0.1);
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    border: 1px solid gray;
    elevation: 3;
`;
