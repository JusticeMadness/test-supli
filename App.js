import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import Store from './Store/configureStore';

import ShoppingList from "./pages/ShoppingList";
import Login from "./pages/Login";

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<Provider store={Store}>
			<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;
								switch(route.name) {
									case "ShoppingList":
									iconName = "shopping-cart";
									break;
									case "Login":
									iconName = "user-circle";
									break;
									default: 
									return;
								}
								return <Icon name={iconName} size={24} />;
							},
						})}
						tabBarOptions={{
							activeTintColor: '#74B9FF',
							inactiveTintColor: 'gray',
				        }}
			        >
						<Tab.Screen name="ShoppingList" component={ShoppingList} />
						<Tab.Screen name="Login" component={Login} />
					</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
