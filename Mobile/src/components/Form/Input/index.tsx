import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

interface FormInputTextProps extends TextInputProps {
	placeholder: string;
	isModal?: boolean;
	icon?: ReactNode;
}

export function Input({ icon, placeholder, isModal,...rest }: FormInputTextProps) {
	return(
		<View style={[
			styles.inputSafeArea,
			isModal && { width: '85%', alignSelf: 'center' }
			]}>
			<TextInput
				placeholderTextColor={'#6B6B6B'}
				style={[
					styles.formInputText,
					isModal && { textAlign: 'center', width: '100%' }]}
				placeholder={placeholder}
				{...rest}
			/>
			<View style={styles.infoIcon}>
				{icon}
			</View>
		</View>
	);
}
