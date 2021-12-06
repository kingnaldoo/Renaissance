import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export function Home({ navigation }: any) {
	return(
		<>
			<TouchableOpacity onPress={() => navigation.navigate('Reserves')}>
				<Text style={{ color: 'black' }}>Reservas</Text>
			</TouchableOpacity>
		</>
	);
}
