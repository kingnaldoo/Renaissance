import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

interface ButtonHomeProps extends TouchableOpacityProps {
	title: string;
	icon: ReactNode;
}

export function ButtonHome({ title, icon, ...rest }: ButtonHomeProps) {

	return(
		<TouchableOpacity style={styles.button} {...rest}>
			<View>
				{icon}
				<Text style={styles.title}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}
