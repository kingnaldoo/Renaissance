import React from 'react';
import { Layout } from '../Layout';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import { Text } from 'react-native';
import AlertIcon from '../../../assets/icons/atempt.svg';
import { styles } from './styles';

interface AlertModalProps extends IModalProps{
	title: string
	description: string
}

export function AlertModal({ title, description, ...rest }: AlertModalProps){
	return(
		<Layout {...rest}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
			<AlertIcon height={40} style={styles.icon}/>
		</Layout>
	);
}
