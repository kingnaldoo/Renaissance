import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

interface FormInputTextProps extends TextInputProps {
	placeholder: string;
	icon?: ReactNode;
}

export function Input({ icon, placeholder, ...rest }: FormInputTextProps) {
	return(
		<View style={styles.inputSafeArea}>
			<TextInput
				placeholderTextColor={'#6B6B6B'}
				style={styles.formInputText}
				placeholder={placeholder}
				{...rest}
			/>
			<View style={styles.infoIcon}>
				{icon}
			</View>
		</View>
	);
}
