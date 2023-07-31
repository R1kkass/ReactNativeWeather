import axios from "axios";

export interface IWeatherApi {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        temp_max: number;
        temp_min: number;
        pressure: number;
    };
    clouds: {
        all: number;
    };
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
    timezone_offset: number
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
    daily: IDaily[]
    hourly: IDaily[]
}

export interface IDaily {
    dt: number
    temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
    }
    feels_like: {
        day: number
        night: number
        eve: number
        morn: number
    }
    pressure: number
    humidity: number
    wing_deg: number
    wing_gust: number
    weather: Weater[],
    cloud: number
    pop: number
    rain: number
    uvi: number
}

export const WeaterApi = async (name: string) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`
    );

    return response.data;
};

export const WeaterApiCallOne = async (
    lat: number | undefined | string,
    ion: number | undefined | string
) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${ion}&exclude&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`
    );
    return response.data;
};

export const WeaterApiFind = async (name: string) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${name}&appid=70e1ed322b02acbc57d443dd91065f3e&lang=ru`
    );
    return response.data;
};
