import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import Store from './Store/configureStore';

import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
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
								case "Shop":
									iconName = "shopping-cart";
								break;
								case "Categories":
									iconName = "list";
								break;
								case "Login":
									iconName = "user-circle";
								break;
								default: 
									return;
							}
							return (
								<Icon 
									name={iconName} 
									color={focused ? '#74B9FF' : 'grey'} 
									size={24} 
								/>
							);
						},
					})}
					tabBarOptions={{
						activeTintColor: "#74B9FF",
						inactiveTintColor: "gray",
			        }}
		        >
					<Tab.Screen name="Shop" component={Shop} />
					<Tab.Screen name="Categories" component={Categories} />
					<Tab.Screen name="Login" component={Login} />
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;