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
            
        },
        initCity(state, actions) {
            state.city = actions.payload
        }
    }
})

export default citySlice.reducer

export const {setCity,initCity} = citySlice.actions