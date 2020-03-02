import * as React from 'react';
import { 
	TouchableOpacity, View,
	ScrollView, Text,
} from 'react-native';
import { mainStyles as _ } from "../assets/mainStyles";

import { connect } from 'react-redux';
import { removeCategoryAction } from '../Store/Actions/cart';

import Icon from 'react-native-vector-icons/FontAwesome';

const CartArticles = ({ cart }) => {
	return (
		<ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
			<Text style={_.subtitle}>Shipping address</Text>
			<View style={styles.address}>
				<Icon 
					style={styles.icon} 
					name="truck" 
					color='grey' 
					size={24} 
				/>
				<Text style={styles.addressText}>
					{cart.shippingAddress}
				</Text>
				<TouchableOpacity onPress={() => ""} style={styles.change}>
					<Text>CHANGE</Text>
				</TouchableOpacity>
			</View>
			<View style={_.line} />
			<View style={styles.detail}>
				<Text style={_.subtitle}>Price details</Text>
				{cart.articles.map((article, i) => {				
					return (
						<View key={i} style={styles.address}>
							<Text style={styles.articleName}>{article.name}</Text>
							<View style={_.line} />
							<Text style={styles.articlePrice}>{article.value} x {article.price}€</Text>
						</View>
					);
				})}
			</View>
			<View style={styles.microline} />
			<View style={styles.totalInfos}>
				<Text style={styles.totalText}>Total</Text>
				<Text style={styles.total}>{cart.total}€</Text>
			</View>
		</ScrollView>
	);
} 

const styles = {
	main: {
		paddingTop: 10,
		backgroundColor: "#FFF",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.35,
		shadowRadius: 6.00,
		elevation: 10,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	address: {
		paddingTop: 10,
		paddingHorizontal: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	addressText: {
		flex: 6,
		marginHorizontal: 15,
	},
	change: {
		flex: 3,
		borderRadius: 9999,
		borderWidth: .25,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	dashed: {
		flex: 1,
		borderWidth: .25,
		height: 1,
		borderStyle: "dotted",
		marginHorizontal: 15,
	},
	microline: {
		alignSelf: "flex-end",
		height: 1,
		width: 30,
		backgroundColor: "lightgrey",
		marginVertical: 10,
		marginRight: 10,
	},
	totalInfos: {
		flexDirection: "row",
		alignSelf: "flex-end",
		marginRight: 10,
	},
	total: {
		fontSize: 22,
		alignSelf: "flex-end",
		marginBottom: 20,
		marginRight: 10,
	},
	totalText: {
		marginRight: 10,
		fontSize: 18,
	},
	articleName: {
		marginRight: 10,
		fontSize: 18,
		color: "grey",
	},
	articlePrice: {
		marginLeft: 10,
	},
}

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(CartArticles);
