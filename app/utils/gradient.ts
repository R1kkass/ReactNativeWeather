export function gradient(icon: string) {
    if (icon === "02n" || icon === "03n") {
        return ["rgba(0,0,0,0.9)", "rgba(10,10,10,0.6)"];
    } else if (icon === "01d") {
        return ["#b7a300", "transparent"];
    } else if (icon === "03n") {
        return ["rgba(10,10,10,0.8)", "transparent"];
    } else if (icon === "01n") return ["rgba(10, 26, 74, 1)", "rgba(0,0,0,1)"];

    return ["rgba(10,10,10,0.8)", "transparent"];
}

export function colorSet(icon: string) {
    switch (icon) {
        case "01d":
            return "rgb(255, 201, 66)";
        case "02d":
            return "rgb(237, 210, 147)";
        case "03d":
            return "rgb(148, 148, 148)";
        case "04d":
            return "rgb(148, 148, 148)";
        case "09d":
            return "rgb(41, 41, 41)";
        case "10d":
            return "rgb(179, 154, 91)";
        case "13d":
            return "rgb(255,255,255)";
        case "50d":
            return "rgb(201, 197, 187)";
        default: 
            return "rgb(50, 50, 50)";
    }
}
