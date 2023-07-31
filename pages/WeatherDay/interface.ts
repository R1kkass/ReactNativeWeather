import { IDaily } from "../../app/api/WeatherApi";

export interface IWeatherDay {
    route: {
        params: {
            daily: IDaily[]
        }
    }
}