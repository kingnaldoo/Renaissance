import React, { useCallback, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Form } from '@unform/mobile';

import LogoImg from '../../assets/icons/logo.svg';

import { styles } from './styles';
import { Input } from '../../components/Form/Input';

export function SignIn() {
	const formRef: any = useRef();

	const handleSignIn = useCallback(() => {
		console.log('oi');
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<LogoImg width={140} height={95} style={styles.logo} />
			</View>
			<View style={styles.body}>
				<View style={styles.card}>
					<View style={styles.formTitleField}>
						<Text style={styles.formTitle}>Login</Text>
					</View>
					<View style={styles.input}>
						<Form ref={formRef} onSubmit={handleSignIn}>
							<TextInput placeholder='email'/>
							<TextInput placeholder="senha"/>
							<Text>Manter-me conectado</Text>
						</Form>
					</View>
					<View>
						<Text>Não possui cadastro clique aqui</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
