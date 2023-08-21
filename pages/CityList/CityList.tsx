import { Dimensions, Text, View } from "react-native";
import { useAppSelector } from "../../app/redux/hooks";
import { ScrollView, TouchableOpacity } from "react-native";
import AllCityUnit from "../../shared/AllCityUnit/AllCityUnit";
import { useEffect, useState } from "react";
import ButtonDelete from "../../entities/ButtonDelete/ButtonDelete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { initCity } from "../../app/redux/WeatherSlice";
import Styles from "./Styles";
import { ICityList } from "./interface";
import { FC } from "react";

const maxHeight = Dimensions.get("window").height;

const CityList: FC<ICityList> = ({ navigation, route }) => {
    const cities = useAppSelector((state) => state.cityReducer.city);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const [array, setArray] = useState([]);

    const push = (val: string) => {
        if (!array.join(" ").includes(val)) {
            setArray([...array, val]);
            return true
        } else {
            setArray(
                array.filter((arr) => {
                    return arr != val;
                })
            );
            return false
        }
    };

    const callbackVisible=()=>{
        setVisible((p) => !p)
        setArray([])
    }

    const deleteArray = async () => {
        let a = [...cities];
        for (let i = 0; i < array.length; i++) {
            a = a.filter((city) => {
                if (city.id != array[i]) {
                    return city;
                }
            });
        }
        await AsyncStorage.setItem("city", JSON.stringify(a));

        dispatch(initCity(a));
        setArray([])
    };

    useEffect(()=> {
        console.log(route);
        
        if(visible){
            setVisible(false)
        }
    }, [])

    useEffect(()=> {
        return()=>setArray([])
    }, [])

    return (
        <View style={{ minHeight: maxHeight }}>
            <ScrollView style={{ maxHeight: maxHeight - (visible ? 100 : 60) }}>
                <Styles.ViewContainer style={{ paddingBottom: visible && 100 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Add")}
                    >
                        <Styles.ViewSearch>
                            <Styles.TextCity>
                                Введите местоположение
                            </Styles.TextCity>
                        </Styles.ViewSearch>
                    </TouchableOpacity>
                    {cities?.map((city) => (
                        <AllCityUnit
                            key={city.id}
                            push={push}
                            callback={() => callbackVisible()}
                            visible={visible}
                            city={city}
                        />
                    ))}
                </Styles.ViewContainer>
            </ScrollView>
            <ButtonDelete callback={deleteArray} visisble={visible} />
        </View>
    );
};

export default CityList;
