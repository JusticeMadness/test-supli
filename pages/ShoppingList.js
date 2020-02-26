import * as React from 'react';
import { Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import Articles from "../components/Articles";

const ShoppingList = ({ navigation, cart }) => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Shopping Bag</Text>
			<Articles />
			<ScrollView style={styles.cartInfos}>
				<Text style={styles.subtitle}>Shipping address</Text>
				<View style={styles.address}>
					<Icon style={styles.icon} name="truck" size={24} color='grey' />
					<Text style={styles.addressText}>{cart.shippingAddress}</Text>
					<TouchableOpacity onPress={() => console.log(cart)} style={styles.change}>
						<Text>CHANGE</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.line} />
				<Text style={styles.subtitle}>Price details</Text>
				<View style={styles.detail}>
					{cart.articles.map((article, i) => {
						return(
							<View key={i} style={styles.address}>
								<Text style={styles.articleName}>{article.name}</Text>
								<View style={styles.dashed} />
								<Text>{article.value} x {article.price}€</Text>
							</View>
						);
					})}
				</View>
				<View style={styles.microline} />
				<View style={styles.totalInfos}>
					<Text style={styles.totalText}>total</Text>
					<Text style={styles.total}>{cart.total}€</Text>
				</View>
			</ScrollView>
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
	subtitle: {
		fontSize: 22,
		marginLeft: 10,
	},
	cartInfos: {
		paddingTop: 10,
	},
	address: {
		padding: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		flex: 1,
		alignSelf: "center",
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
	line: {
		height: 1,
		backgroundColor: "lightgrey",
		marginVertical: 10,
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
		marginBottom: 10,
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
		fontSize: 18,
		marginRight: 10,
	},
	articleName: {
		fontSize: 18,
		color: "grey",
	}
}


const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(ShoppingList);
