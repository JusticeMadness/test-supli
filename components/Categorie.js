import * as React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';

import { connect } from 'react-redux';

const Categorie = ({ navigation, name, uri }) => {

	return (
		<ImageBackground source={{uri: uri}} imageStyle={{ borderRadius: 10, backgroundColor: '#0008' }} 
			style={styles.container}>
			<View style={styles.filter}>
				<Text style={styles.name}>{name}</Text>
			</View>
		</ImageBackground>
	);
}

const styles = {
	container: {
		width: Dimensions.get('window').width * 0.45,
		height: Dimensions.get('window').width * 0.40,
		marginBottom: 15,
		backgroundColor: '#FFF',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 1,
		shadowRadius: 5.00,

		elevation: 8,
	},
	filter: {
		height: "100%",
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0004',
		borderRadius: 10,
	},
	name: {
		fontSize: 22,
		color: "white",
		paddingHorizontal: 10,

	},
}

export default Categorie;
