import React from "react";

// Import components from react-native
import { Text, StyleSheet } from "react-native";

// Import react-native vector icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const TextComponent: React.FC = () => {
    return (
        <>
            <Text style = {styles.firstText}>
                Let's use custom fonts in our application!
                {'\n'}
            </Text>
            <Text style = {styles.secondText}>
                Let's use custom icons in our application!
                {'\n'}            
            </Text>

            <FontAwesome name = "home" size = {50} color = "#000"/>
            <AntDesign name = "heart" size = {50} color = "red"/>
            <Ionicons name = "mic" size = {50} color = "#000"/> 
        </>
    )
}

const styles = StyleSheet.create({
    firstText: {
        fontFamily: "Alkatra-VariableFont_wght",
        fontSize: 40,
        color: "#000"
    },
    secondText: {
        fontFamily: "Fasthand-Regular",
        fontSize: 40,
        color: "#000"
    }
})

export default TextComponent;