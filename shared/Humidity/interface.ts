import { IWeatherApi, IWeatherOneCallApi } from "../../app/api/WeatherApi";

export interface IHumidity {
    weather: IWeatherApi
    oneCall?: IWeatherOneCallApi
}