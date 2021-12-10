import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { theme } from '../../../global/styles/theme';
import { CreateReserve } from './CreateReserve';
import { MyReserves } from './MyReserves';

export function Reserves() {
	const Tab = createMaterialTopTabNavigator();

	return (
		<Tab.Navigator initialRouteName='Fazer Reserva' screenOptions={{
			tabBarStyle: {
				backgroundColor: theme.colors.header
			},
			tabBarLabelStyle: {
				alignItems: 'center'
			},
			tabBarActiveTintColor: '#FFF',
			tabBarIndicatorStyle: {
				backgroundColor: '#FFF',
			},
			tabBarPressColor: 'transparent'
		}}>
			<Tab.Screen name='Fazer reserva' component={CreateReserve}/>
			<Tab.Screen name='Minhas reservas' component={MyReserves} />
		</Tab.Navigator>
	);
}
