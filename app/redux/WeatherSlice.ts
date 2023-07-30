import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

interface ICity{
    name: string,
    id: number
}

export interface IStoreFlower{
    city: ICity[] 
}

const initialState:IStoreFlower = {
    city: [],
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity(state, actions) {
            state.city.push(actions.payload)
            
        }
    }
})

export default citySlice.reducer

export const {setCity} = citySlice.actions