import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cityReducer from './WeatherSlice'
import cityApiReducer from './CitySlice'

const rootReducer = combineReducers({
    cityReducer,
    cityApiReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']