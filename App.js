import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import GetStarted from "./Screens/Auth/GetStarted";

const Stack = createNativeStackNavigator();

export default function App() {
	const [admissionNumber, setAdmissionNumber] = useState("");
	return (
		<NavigationContainer>
					<Stack.Navigator
						initialRouteName="GetStarted"
						screenOptions={{ headerShown: false }}
					>
						{/* <Stack.Screen name="Login">{props => (<Startup {...props} admissionNumber={admissionNumber}
									setAdmissionNumber={setAdmissionNumber} />)}</Stack.Screen>
						<Stack.Screen
							name="CreateAccount"
						>
							{(props) => (
								<CreateAccount
									{...props}
									admissionNumber={admissionNumber}
									setAdmissionNumber={setAdmissionNumber}
								/>
							)}
						</Stack.Screen> */}
						<Stack.Screen name="GetStarted" component={GetStarted} />
					</Stack.Navigator>
		</NavigationContainer>
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
