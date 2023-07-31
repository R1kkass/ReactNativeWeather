import { IDaily } from "../../app/api/WeatherApi";

export interface IUnitWeather {
    day: IDaily;
    timezone_offset: number;
}
