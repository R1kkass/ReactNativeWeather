export function gradient(icon: string) {
    if(icon==="02n" || icon==="03n") {
        return ["rgba(0,0,0,0.9)", 'rgba(10,10,10,0.6)']
    } else if(icon==="01d") {
        return ['#b7a300', 'transparent']
    } else if(icon === "03n"){
        return ["rgba(10,10,10,0.8)", "transparent"]
    } else if (icon === "01n") return ["rgba(10, 26, 74, 1)", "rgba(0,0,0,1)"]
    
    return ["rgba(10,10,10,0.8)", "transparent"]
}