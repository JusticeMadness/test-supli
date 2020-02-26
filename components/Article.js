import * as React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { addArticleAction, removeArticleAction } from '../Store/Actions/cart';

const Article = ({ fruit, addArticle, removeArticle }) => {
	const [value, onChangeValue] = React.useState(0);
	return(
		<View style={styles.article}>
			<View style={[styles.round, {backgroundColor: fruit.color}]} />
			<Image style={styles.image} resizeMode="contain" source={{uri: fruit.uri}} />
			<View style={styles.infos}>
				<Text style={styles.articleName}>{fruit.name}</Text>
				<Text style={styles.articlePrice}>{fruit.price}€</Text>
			</View>
			<View style={styles.counter}>
				<TouchableOpacity style={[styles.square, {backgroundColor: value === 0 ? "#74B9FF55" : "#74B9FF"}]} 
				onPress={() => {
					if(value > 0) {
						onChangeValue(value - 1);	
						const valueToSend = value - 1;
						removeArticle({...fruit, value: valueToSend});
					}
				}}>
					<Text style={styles.count}>-</Text>
				</TouchableOpacity>
				<Text style={styles.count}>{value}</Text>
				<TouchableOpacity style={styles.square} onPress={() => {
					onChangeValue(value + 1);
					const valueToSend = value + 1;
					addArticle({...fruit, value: valueToSend});
				}}>
					<Text style={styles.count}>+</Text>
				</TouchableOpacity>
			</View>
	</View>
	);
} 

const styles = {
	container: {
		paddingVertical: 10,
		borderRadius: 10,
		marginBottom: 20,
	},
	round: {
		position: "absolute",
		left: -35,
		top: 20,
		width: 100,
		height: 100,
		borderRadius: 9999,
	},
	image: {
		width: 116,
		height: 116,
	},
	article: {
		flexDirection: "row",
		marginBottom: 20,
		padding: 20,
		backgroundColor: "#CDD4",
	},
	infos: {
		marginLeft: 20,
	},
	articleName: {
		fontSize: 22,
		color: "grey",
	},
	articlePrice: {
		fontSize: 26,
	},
	counter: {
		position: "absolute",
		flexDirection: "row",
		right: 20,
		bottom: 20,
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#FFF",
	},
	count: {
		fontSize: 22,
		paddingHorizontal: 5,
	},
	square: {
		alignItems: "center",
		width: 30,
		height: 30,
		borderRadius: 5,
		backgroundColor: "#74B9FF",
	}
}


const mapDispatchToProps = dispatch => ({
	addArticle: payload => dispatch(addArticleAction(payload)),
	removeArticle: payload => dispatch(removeArticleAction(payload)),
});

export default connect(null, mapDispatchToProps)(Article);
