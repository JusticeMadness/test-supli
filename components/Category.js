import * as React from 'react';
import { 
	View, ImageBackground, 
	Text, TouchableOpacity, 
	Dimensions,
} from 'react-native';

import { connect } from 'react-redux';
import { addCategoryAction } from '../Store/Actions/cart';

const Category = ({ navigation, name, uri, addCategory }) => {
	return (
		<TouchableOpacity onPress={() => {
			addCategory(name);
			navigation.navigate('Shop');
		}}>
			<ImageBackground 
				source={{uri: uri}} 
				imageStyle={{ borderRadius: 10, backgroundColor: '#0008' }} 
				style={styles.container}
			>
				<View style={styles.filter}>
					<Text style={styles.name}>{name}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
}

const styles = {
	container: {
		width: Dimensions.get('window').width * 0.45,
		height: Dimensions.get('window').width * 0.40,
		marginBottom: 15,
		backgroundColor: '#CCC',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.35,
		shadowRadius: 6.00,
		elevation: 10,
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

const mapDispatchToProps = dispatch => ({
	addCategory: payload => dispatch(addCategoryAction(payload)),
});

export default connect(null, mapDispatchToProps)(Category);
