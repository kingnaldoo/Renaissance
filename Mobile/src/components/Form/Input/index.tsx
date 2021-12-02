import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

type InputProps = {
	name: string,
	hasIcon: boolean
}

export function Input({ placeholder, ...props }: TextInputProps) {
	return(
		<TextInput placeholderTextColor={'#6B6B6B'} style={styles.formInputText} placeholder="Senha" />
	);
}
