import * as React from 'react';
import { View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const InputField = ({icon, placeholder}) => {
	const [value, onChangeValue] = React.useState("");

	return(
		<View style={styles.container}>
			<Icon style={styles.icon} name={icon} size={24} color='grey' />
			<TextInput style={styles.input} onChangeText={value => onChangeValue(value)} value={value} placeholder={placeholder}/>
		</View>
	);
} 

const styles = {
	container: {
		flexDirection: "row",
		paddingHorizontal: 10,
		borderRadius: 10,
		marginBottom: 20,
		backgroundColor: "#FFF",
		color: "#282C40",
	},
	icon: {
		alignSelf: "center",
		marginRight: 10,
	},
	input: {
		height: 50,
		width: "100%",
		color: "grey",
	}
}

export default InputField;