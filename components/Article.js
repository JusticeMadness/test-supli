import * as React from 'react';
import { 
	View, ScrollView, 
	Image, Text, 
	TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { addArticleAction, removeArticleAction } from '../Store/Actions/cart';

const Article = ({ item, addArticle, removeArticle }) => {
	const [value, onChangeValue] = React.useState(0);
	return (
		<View style={styles.article}>
			<View style={[styles.round, {backgroundColor: item.color}]} />
			<Image 
				style={styles.image} 
				resizeMode="contain" 
				source={{uri: item.uri}} 
			/>
			<View style={styles.infos}>
				<Text style={styles.articleName}>{item.name}</Text>
				<Text style={styles.articlePrice}>{item.price}€</Text>
			</View>
			<View style={styles.counter}>
				<TouchableOpacity 
					style={[styles.square, {
						backgroundColor: value === 0 ? "#74B9FF55" : "#74B9FF"
					}]} 
					onPress={() => {
						if(value > 0) {
							onChangeValue(value - 1);	
							const valueToSend = value - 1;
							removeArticle({...item, value: valueToSend});
						}
					}}
				>
					<Text style={styles.count}>-</Text>
				</TouchableOpacity>
				<Text style={styles.count}>{value}</Text>
				<TouchableOpacity 
					style={styles.square} 
					onPress={() => {
						onChangeValue(value + 1);
						const valueToSend = value + 1;
						addArticle({...item, value: valueToSend});
					}}
				>
					<Text style={styles.count}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = {
	container: {
		paddingVertical: 10,
		borderRadius: 10,
		marginBottom: 20,
	},
	round: {
		position: "absolute",
		left: -10,
		top: 20,
		width: 64,
		height: 64,
		borderRadius: 9999,
	},
	image: {
		width: 80,
		height: 80,
	},
	article: {
		flexDirection: "row",
		marginBottom: 20,
		padding: 20,
		backgroundColor: "#CDD7",
	},
	infos: {
		marginLeft: 20,
	},
	articleName: {
		fontSize: 22,
		color: "grey",
	},
	articlePrice: {
		fontSize: 20,
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
