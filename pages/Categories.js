import * as React from 'react';
import { Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

const Categories = ({ navigation, cart }) => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categories</Text>
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
}


const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Categories);
