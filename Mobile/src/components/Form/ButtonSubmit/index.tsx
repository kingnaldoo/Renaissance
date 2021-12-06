import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface FormButtonSubmitProps extends TouchableOpacityProps {
	title: string;
	isModal?: boolean;
}

export function ButtonSubmit({ title, isModal,...rest }: FormButtonSubmitProps) {
	return(
		<TouchableOpacity style={!isModal && styles.formButtonSubmit} {...rest}>
			<Text style={!isModal ? styles.formTextButton : styles.formTextButtonModal}>{title}</Text>
		</TouchableOpacity>
	);
}
