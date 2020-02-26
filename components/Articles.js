import * as React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

import Article from "./Article";

import { fruits } from "../data/fruits";

const Articles = () => {
	const [value, onChangeValue] = React.useState(1);

	return(
		<ScrollView style={styles.container}>
			{fruits.map((fruit, i) => {
				return(
					<Article fruit={fruit} key={i} />
				);
			})}
		</ScrollView>
	);
} 

const styles = {
	container: {
		paddingTop: 10,
		borderRadius: 10,
	},
}

export default Articles;