import React from 'react';
import { Layout } from '../Layout';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import { Text } from 'react-native';
import { styles } from './styles';
import { Input } from '../../Form/Input';
import { ButtonSubmit } from '../../Form/ButtonSubmit';

interface FormModalProps extends IModalProps{
	title: string
	description: string
	placeholder: string
	isOpen: boolean
}

export function FormModal({ title, description, placeholder, isOpen,...rest }: FormModalProps){
	return(
		<Layout isOpen={isOpen} {...rest}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
			<Input placeholder={placeholder} isModal/>
			<ButtonSubmit title='Enviar e-mail' isModal/>
		</Layout>
	);
}
