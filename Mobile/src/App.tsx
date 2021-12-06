import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Routes } from './routes';

export default function App() {
	return (
		<NavigationContainer>
			<NativeBaseProvider>
				<Routes />
			</NativeBaseProvider>
		</NavigationContainer>
	);
}
