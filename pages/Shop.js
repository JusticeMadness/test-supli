import * as React from 'react';
import { 
	Button, View, 
	Text, ScrollView, 
	TouchableOpacity, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { mainStyles as _ } from "../assets/mainStyles";

import { connect } from 'react-redux';

import { items } from "../data/items";

import Article from "../components/Article";
import CartArticles from "../components/CartArticles";
import RemoveCatButton from "../components/RemoveCatButton";

const Shop = ({ navigation, cart }) => {
	return (
		<View style={_.mainContainer}>
			
			<Text style={_.title}>Shop</Text>
			{cart.category &&
				<RemoveCatButton />
			}

			<View style={styles.articles}>
				<ScrollView>
					{items.map((item, i) => {
						if(cart.category && item.category === cart.category 
							|| !cart.category) {
							return(
								<Article item={item} key={i} />
							);
						}	
					})}
				</ScrollView>
			</View>
			
			<CartArticles />
			
		</View>
	);
};

const styles = {
	articles: {
		top: 15,
		height: Dimensions.get('window').height * 0.55,
	},
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Shop);
