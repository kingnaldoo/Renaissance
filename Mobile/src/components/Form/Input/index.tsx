import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export function Input({ placeholder, ...props }: TextInputProps) {
	return(
		<TextInput
			style={styles.container}
			placeholder={placeholder}
			{...props}
		/>
	);
}
