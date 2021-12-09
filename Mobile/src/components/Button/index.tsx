import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type ButtonHomeProps = {
	title: string;
	icon: ReactNode;
}

export function ButtonHome({ title, icon }: ButtonHomeProps) {

	return(
		<TouchableOpacity style={styles.button}>
			<View>
				{icon}
				<Text style={styles.title}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}
