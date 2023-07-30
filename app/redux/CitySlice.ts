import { createSlice } from "@reduxjs/toolkit";
import { IWeatherApi } from "../api/WeatherApi";
import AsyncStorage from "@react-native-async-storage/async-storage"

export interface ICityApi{
    name: string,
    id: number,
    message: string,
    count: number,
    list: IList[]
}

export interface IStoreFlower{
    city: ICityApi,
    isLoading: boolean
}

export interface IList extends IWeatherApi {
    name: string,
    id: number
}


const initialState:IStoreFlower = {
    city: null,

    isLoading: false
}

export const cityApiSlice = createSlice({
    name: 'cityAdd',
    initialState,
    reducers: {
        setCityApi(state, actions) {
            state.city=actions.payload
        },
        setLoading(state, actions) {
            state.isLoading = actions.payload
        }
    }
})

export default cityApiSlice.reducer

export const {setCityApi,setLoading} = cityApiSlice.actions