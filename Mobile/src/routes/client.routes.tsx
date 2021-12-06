import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens/Client/Home';
import { Reserves } from '../screens/Client/Reserves';


export function ClientRoutes() {
	const { Navigator, Screen } = createStackNavigator();

	return(
		<Navigator initialRouteName='Home'>
			<Screen
				name='Home'
				component={Home}
			/>

			<Screen
				name='Reserves'
				component={Reserves}
			/>
		</Navigator>
	);
}
