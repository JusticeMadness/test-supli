import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import Categorie from "../components/Categorie";
import { categories } from "../data/categories";

const Categories = ({ navigation, cart }) => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categories</Text>
			<View style={styles.main}>
				{categories.map((categorie, i) => {
				return(
					<Categorie uri={categorie.uri} name={categorie.name} key={i} />
				);
			})}
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
	main: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: 10,
	},
	title: {
		fontSize: 26,
		marginLeft: 10,
	},
}


const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Categories);
