import {WebView} from "react-native-webview" 

const Map = ({route}) => {
    let weather = route.params.weather

    return (
        <WebView 
        // `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=windspeed&lat=&lon=-20&zoom=0`
        source={{ uri: `https://yandex.ru/pogoda/maps/nowcast?lat=${weather?.coord.lat}&lon=${weather?.coord.lon}&le_Lightning=1` }} 
        style={{width: "100%", height: 400, borderRadius: 20}}/>
    )
}

export default Map