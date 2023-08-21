import {StyleSheet} from "react-native";
import { primary } from "../../app/const/color";

export const styles = StyleSheet.create({
    scroll: {
        height: "100%",
        width: "100%",
        paddingTop: 40,
        color: "white",
        backgroundColor: primary(),
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    minMax: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 15,
    },
    fisrstLine: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
