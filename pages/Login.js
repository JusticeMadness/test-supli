import * as React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import InputField from "../components/InputField";

const Login = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../assets/icon.png")} />
			<View style={styles.main}>
				<InputField icon="envelope" placeholder={"Email Address"} /> 
				<InputField icon="lock" placeholder={"Password"} />
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<View style={styles.barredTextContainer}> 
					<View style={styles.bar} />
					<Text style={styles.barredText}>Or</Text>
					<View style={styles.bar} /> 
				</View> 
				<View style={styles.linksContainer}>
					<TouchableOpacity style={styles.linkButton}>
						<Image style={styles.google} source={require("../assets/google.png")} />
						<Text>Google</Text>
					</TouchableOpacity> 
					<TouchableOpacity style={styles.linkButton}>
						<Image style={styles.facebook} source={require("../assets/fb.png")} />
						<Text>Facebook</Text>
					</TouchableOpacity> 
				</View> 
				<TouchableOpacity>
					<Text style={styles.terms}>Terms & Conditions</Text>				
				</TouchableOpacity> 
			</View>
		</View>
	);
}

const styles = {
	container: { 
		flex: 1,
		paddingTop: 30,
		backgroundColor: "#FFF",
	},
	title: {
		fontSize: 26,
		marginLeft: 10,
	},
	logo: {
		alignSelf: "center",
		width: 64,
		height: 64,
		marginTop: 20,
		marginBottom: 20,
	},
	main: {
		padding: 20,
		flex:1,
		alignSelf:'stretch',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.30,
		shadowRadius: 5.00,

		elevation: 8,
		backgroundColor: "#F4F4F4",
	},
	button: {
		backgroundColor: "#74B9FF",
		borderRadius: 10,
		paddingVertical: 15,
		alignItems: "center",
	},
	buttonText: {
		color: "#FFF",
	},
	barredTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 15,
	},
	barredText: {
		marginHorizontal: 20,
		color: "grey",
	},
	bar: {
		flex: 1,
		backgroundColor: "grey",
		height: 1,
	},
	linksContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	linkButton: {
		backgroundColor: "#FFF",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		width: "45%",
		padding: 15,
	},
	google: {
		width: 38,
		height: 38,
		marginRight: 5,
	},
	facebook: {
		width: 50,
		height: 50,
		marginRight: 5,
	},
	terms: {
		marginTop: "12%",
		alignSelf: "center",
		color: "grey",
		textDecorationLine: "underline",
	}
}

export default Login;