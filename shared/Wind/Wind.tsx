import {View,StyleSheet,Text, Image} from "react-native"
import styled from "styled-components/native"
import { degShow } from "../../app/utils/deg"

const Wind = ({weather}) => {
    return(
        <View style={styles.container}>
            <View style={styles.speed}>
                <Text style={styles.text}>
                    {weather.wind.speed.toFixed(1)}м/c
                </Text>
                <Text style={styles.text}>
                    {degShow(weather.wind.deg)}
                </Text>
            </View>
            <View style={styles.wind}>            
                <MyWind deg={weather.wind.deg} style={styles.arrow} source={require('../../assets/arrow.png')}/>
                <Text style={styles.west}>В</Text>
                <Text style={styles.south}>Ю</Text>
                <Text style={styles.east}>C</Text>
                <Text style={styles.north}>З</Text>
            </View>
        </View>
    )
}

const MyWind = styled.Image<{deg: number}>`
    resizeMode: 'stretch';
    width: 30px;
    height: 90px;
    transform: rotate(${props=>props.deg + 180}deg);
`

const styles = StyleSheet.create({
    speed: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    },
    wind: {
        flexShrink: 0,
        maxWidth: 100,
        minWidth: 100,
        maxHeight: 100,
        minHeight: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow: {
        resizeMode: 'stretch',
        width: 20,
        height: 50,
    },
    container: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        display: 'flex',
        height: 100,
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '49%',
        backgroundColor: 'rgba(255,255,255, .15)', 
        borderRadius: 20,
        position: 'relative',
        flexDirection: 'row'
    },
    west: {
        position: 'absolute',
        right: 5,
        color: 'white'
    },
    south: {
        position: 'absolute',
        bottom: 5,
        color: 'white'
    },
    east: {
        position: 'absolute',
        top: 5,
        color: 'white'
    },
    north: {
        position: 'absolute',
        left: 5,
        color: 'white'
    }
})



export default Wind