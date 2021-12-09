import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Client/Home';
import { Reserves } from '../screens/Client/Reserves';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Documents } from '../screens/Client/Documents';
import { color } from 'react-native-reanimated';
import { theme } from '../global/styles/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export function ClientRoutes() {
	const Stack = createStackNavigator();
	const Drawer = createDrawerNavigator();
	const Tab = createMaterialTopTabNavigator();

	Icon.loadFont();

	const Menu = ({ navigation }: any) => {
		return (
			<Stack.Navigator initialRouteName='Home' screenOptions={{
				title: '',
				headerStyle: {
					backgroundColor: theme.colors.header,
					height: 50,
					shadowColor: 'transparent'
				},
				headerBackImage: () => {
					return <Icon name='arrow-left' size={27} color={'#FFF'}/>;
				},
				headerRight: () => {
					return <Icon
						name='menu'
						size={27}
						color={'#FFF'}
						style={{ marginRight: 14 }}
						onPress={() => {
						navigation.toggleDrawer();
					}} />;
				}
			}}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Reserves' component={Reserves} />
				<Stack.Screen name='Documents' component={Documents} />
			</Stack.Navigator>
		);
	};

	return (
		<Drawer.Navigator initialRouteName='Home' screenOptions={{
			headerShown: false,
			drawerPosition: 'right',

			drawerStyle: {
				width: '80%',
				backgroundColor: theme.colors.header
			}
		}}>
			<Drawer.Screen name="Menu" component={Menu} />
		</Drawer.Navigator>
	);
}

