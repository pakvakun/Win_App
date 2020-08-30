import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('screen');

export const Style = StyleSheet.create({
    firsImg: {
        width: width, 
        aspectRatio: 1.25,
        overflow: 'hidden'
    },
    otherImages: {
        width: width * .25,
        aspectRatio: 1
    }
});