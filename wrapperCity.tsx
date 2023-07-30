import { setCity } from "./app/redux/WeatherSlice"
import { useAppDispatch, useAppSelector } from "./app/redux/hooks"
import {useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"

const WrapperCity = () => {
    const dispatch = useAppDispatch()
    const cityi = useAppSelector(state=>state.cityApiReducer.city)
    async function city() {
      let res = await AsyncStorage.getItem('city')
      dispatch(setCity(JSON.parse(res)))
      console.log(cityi);
      
    }
  
    useEffect(()=>{
        city()
    }, [])
  
}

export default WrapperCity