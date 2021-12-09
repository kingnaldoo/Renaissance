import React from 'react';
import { Text } from 'react-native';

export function Documents({ navigation }: any) {
	return (
		<>
		<Text onPress={() => navigation.toggleDrawer()}>Documentos</Text>
		</>
	);
}
