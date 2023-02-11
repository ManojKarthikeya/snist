import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import GetStarted from "./Screens/Auth/GetStarted";
import Register from "./Screens/Auth/Register";

const Stack = createNativeStackNavigator();

export default function App() {
	const [admissionNumber, setAdmissionNumber] = useState("");
	let user = null
	return (
		<React.Fragment>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="GetStarted"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="GetStarted" component={GetStarted} />
					<Stack.Screen name="Register" component={Register} />
				</Stack.Navigator>
			</NavigationContainer>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
