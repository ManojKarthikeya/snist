import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { Component, useContext, useState } from "react";
import fonts from "../../Constants/fonts";
import inputs from "../../Constants/inputs";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
	const [admissionNumber, setAdmissionNumber] = useState("");
	const navigation = useNavigation()
	return (
		<SafeAreaView style={styles.container}>
			<Text style={fonts.h1}>Let's get you started</Text>
            <Text style={fonts.h3}>Enter your admission number.</Text>
			<TextInput
                style={{...inputs.filledTextLight, ...styles.admissionInput}}
				value={admissionNumber}
				onChange={(changedText) => setAdmissionNumber(changedText)}
				autoFocus
				maxLength={10}
				autoCapitalize="characters"
				onSubmitEditing={()=>{
					navigation.navigate('Register')
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 10,
		// alignItems : "center",
		justifyContent: "center",
	},
    admissionInput: {
		width: "75%",
		marginTop: 15,
        fontSize : 38,
        fontWeight: "700",
        letterSpacing: 3
    }
});

export default GetStarted;
