import axios from "axios";

export interface IWeatherApi {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        temp_max: number;
        temp_min: number;
    };
    clouds: {
        all: number
    }
    sys: {
        country: string;
    };
    weather: Weater[];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    coord: {
        lon: number;
        lat: number;
    };
    visibility: number;
}

interface Weater {
    main: string;
    description: string;
    icon: string;
}

export interface IWeatherOneCallApi {
    lat: number;
    timezone: number;
    lon: number;
    current: {
        visibility: number;
        dt: number;
        dew_point: number;
        wind_deg: number;
        wind_speed: number;
        temp: number;
        weather: Weater[];
        feels_like: number;
        humidity: number;
    };
}

export const WeaterApi = async (name: string) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`
    );
    
    
    return response.data;
};

export const WeaterApiCallOne = async (
    ion: number | undefined | string,
    lat: number | undefined | string
) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${ion}&exclude&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`
    );
    return response.data;
};

export const WeaterApiFind = async (name: string) =>{
    
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${name}&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`
    );
    return response.data;
}