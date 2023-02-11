import React, { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
	const [count, setCount] = useState(0)
	
	return (
		<SafeAreaView style={styles.container}>
			<Text>Increment Count : {count}</Text>
			<Button
				onPress={() => {
					setCount(count+1)
				}}
				title="Press me!"
			>
			</Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Register;
