import { StyleSheet } from "react-native";
import { colors } from "../constants"

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: colors.black,
        height: "100%"
    },
    homeText: {
        fontSize: 24,
        fontWeight: 600,
        marginTop: 100,
        marginHorizontal: 10,
        color: colors.white,
    },
    homeBottom: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    homeTextInput: {
        backgroundColor: colors.grey,
        color: colors.white,
        width: 250,
        padding: 15,
        borderRadius: 20
    },
    addWrapper: {
        width: 60,
		height: 60,
		backgroundColor: colors.blue,
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: "#C0C0C0",
		borderWidth: 1,
    },
    addText: {
        color: colors.white,
        fontSize: 40,
    }
});

export default styles;