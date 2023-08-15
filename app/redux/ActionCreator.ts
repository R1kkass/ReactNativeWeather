import { WeaterApiFind } from "../api/WeatherApi";
import { setCityApi, setLoading } from "./CitySlice";
import { AppDispatch } from "./store";

export const cityFetch = (name: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true))
        let cities2 = await WeaterApiFind(name.name)

        if(name?.citis?.length){
            for(let i=0; i<name.citis.length; i++) {
                cities2.list = cities2.list.filter(city=>{
                    if( city.id != name.citis[i].id){
                        return city
                    }
                })
            }
        }

        
        dispatch(setCityApi(cities2))
        dispatch(setLoading(false))
    }catch(e){
        dispatch(setLoading(false))
    }
}