import { WeaterApiFind } from "../api/WeatherApi";
import { setCityApi, setLoading } from "./CitySlice";
import { AppDispatch } from "./store";

export const cityFetch = (name: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true))
        const e = await WeaterApiFind(name)
        dispatch(setCityApi(e))
        dispatch(setLoading(false))
    }catch(e){
        dispatch(setLoading(false))
    }
}