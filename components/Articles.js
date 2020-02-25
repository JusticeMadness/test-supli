import * as React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

import Article from "../components/Article";

const fruits = [
	{
		id: 1,
		name: "bananas",
		price: Math.floor((Math.random() * 35) + 15),
		color: "#FF69",
		uri: "https://purepng.com/public/uploads/medium/purepng.com-bananasbananabananasyellow-bananabotanically-a-berryedible-fruitherbaceousgenus-musa-1701527189249vgoep.png",
	},
	{
		id: 2,
		name: "tomatoes",
		price: Math.floor((Math.random() * 35) + 15),
		color: "#F669",
		uri: "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c239.png",
	},
	{
		id: 3,
		name: "oranges",
		price: Math.floor((Math.random() * 35) + 15),
		color: "#FD69",
		uri: "https://purepng.com/public/uploads/medium/purepng.com-orangesorangefruitfoodtastydeliciousorangecolor-331522582635xfbvy.png",
	},
	{
		id: 4,
		name: "cabbage",
		price: Math.floor((Math.random() * 35) + 15),
		color: "#F7F9",
		uri: "https://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c202.png",
	},
	{
		id: 5,
		name: "salad",
		price: Math.floor((Math.random() * 35) + 15),
		color: "#BFB9",
		uri: "https://www.grupolucas.com/cms/wp-content/uploads/2018/03/file-09-03-2018-14-12-44-qheRtnjX.png",
	},
	{
		id: 6,
		name: "radish",
		price: Math.floor((Math.random() * 35) + 15),
		color: "#DDD9",
		uri: "https://lh3.googleusercontent.com/proxy/VbHoGt4T5QOVgoCFLWXP7OK3Z674ZXten2mL15vAjWrp0sdv8_O94UBzQA9AOhM_nawhmGjjIKe5diE5dWhUa9fOlPYSizJRl1NZ89LOOrU2Lx5_NkTFLb4Ia8p8vEDRxVu2",
	},
];


const Articles = () => {
	const [value, onChangeValue] = React.useState(1);

	return(
		<ScrollView style={styles.container}>
			{fruits.map((fruit, i) => {
				return(
					<Article fruit={fruit}  key={i} />
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