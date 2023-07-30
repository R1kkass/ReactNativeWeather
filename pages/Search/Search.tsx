import { StyleSheet, Button, TextInput, View } from "react-native"
import {useState, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "../../app/redux/hooks/index"
import { cityFetch } from "../../app/redux/ActionCreator"
import UnitCity from "../../shared/UnitCity/UnitCity"

const Search = () => {

    const [name, setName] = useState<string>()
    const dispatch = useAppDispatch()
    const cities = useAppSelector(state=>state.cityApiReducer.city)
    useEffect(()=>{
        console.log(name);
        
    }, [name])

    return(
        <View>
            <TextInput onChangeText={e=>setName(e)} style={style.input} placeholder="Введите город"/>
            <Button onPress={()=>dispatch(cityFetch(name))} title="Поиск"></Button>
            {
                cities?.list?.map(city=>(
                    <UnitCity key={city.id} city={city}></UnitCity>
                ))
            }
        </View>
    )
}

export default Search

const style = StyleSheet.create({
    input: {
        borderBottomWidth: 3,
        borderBottomColor: 'red'
    } 
})