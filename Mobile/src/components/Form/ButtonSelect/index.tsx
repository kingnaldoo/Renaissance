import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ButtonSelectProps extends TouchableOpacityProps{
	title: string
}

export function ButtonSelect({ title, ...rest }: ButtonSelectProps) {
	return(
		<TouchableOpacity style={styles.placeButton} {...rest}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
