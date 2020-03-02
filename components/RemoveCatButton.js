import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { removeCategoryAction } from '../Store/Actions/cart';

import Icon from 'react-native-vector-icons/FontAwesome';

const RemovCatButton = ({ removeCategory }) => {
	return (
		<TouchableOpacity
			style={styles.removeTouch}
			onPress={() => {
				removeCategory();
			}}
		>
			<Icon
				style={styles.removeCategory} 
				name={"list"} 
				color={'grey'} 
				size={24} 
			/>
			<Icon
				style={styles.removeCategory} 
				name={"times"} 
				color={'red'} 
				size={24} 
			/>
		</TouchableOpacity>
	);
} 

const styles = {
	removeTouch: {
		position: 'absolute',
		top: 28,
		right: 0,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	removeCategory: {
		position: 'absolute',
	},
}

const mapDispatchToProps = dispatch => ({
	removeCategory: payload => dispatch(removeCategoryAction(payload)),
});

export default connect(null, mapDispatchToProps)(RemovCatButton);