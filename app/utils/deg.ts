export function degShow(deg: number) {
    if(deg > 350 ) {
        return "С"
    } else if(deg===10) {
        return "С"
    } else if(deg >= 170 && deg <= 190) {
        return "Ю"
    } else if (deg >= 100 && deg <= 169) {
        return "Ю-В"
    } else if (deg >=260 && deg <= 280 ) {
        return "З"
    } else if (deg >=80 && deg <=100){
        return "В"
    } else if (deg >= 281 && deg <=340) {
        return "С-З"
    } else if(deg >=200 && deg <= 259) {
        return "Ю-З"
    } else if(deg>=10 && deg<=79) {
        return "С-В"
    }
}