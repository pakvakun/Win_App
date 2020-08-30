import { Colors } from "../../src/Themes"

const { StyleSheet } = require("react-native")

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        margin: 0,
        justifyContent: 'flex-end'
    },
    content: {
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    }
})