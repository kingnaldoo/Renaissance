import React, { useCallback, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Form } from '@unform/mobile';

import LogoImg from '../../assets/icons/logo.svg';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from '../../components/Form/Input';
import { AlertModal } from '../../components/Modal/Alert';
import { FormModal } from '../../components/Modal/Form';

export function SignIn() {
	const formRef: any = useRef();

	const [isChecked, setIsChecked] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [showSignInModal, setShowSignInModal] = useState(false);
	const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);

	Icon.loadFont();

	const handleSignIn = useCallback(() => {
		console.log('oi');
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<LogoImg width={140} height={95} style={styles.logo} />
			</View>
			<View style={styles.body}>
				<KeyboardAvoidingView style={styles.formField}>
					<View style={styles.formTitleField}>
						<Text style={styles.formTitle}>Login</Text>
					</View>
					<Form ref={formRef} onSubmit={handleSignIn} style={styles.formSignInField}>
						<View style={styles.formSignInInputField}>
							<Input placeholder='E-mail' />
							<Input
								placeholder='Senha'
								icon={
									<Icon
										name={isPasswordVisible ? 'eye' : 'eye-off'}
										size={24}
										color="#418C41"
										onPress={() => setIsPasswordVisible(isPasswordVisible ? false : true)}
									/>
								}
							/>

							<View style={styles.formMaintainConnected}>
								<Icon name={isChecked ? 'check-square' : 'square'} size={20} color="#1B2735" style={styles.formCheckbox} onPress={() => setIsChecked(isChecked ? false : true)} />
								<Text style={styles.formMaintainConnectedText}>Manter-me conectado</Text>
							</View>
						</View>

						<View style={styles.formSignInSubmitField}>
							<TouchableOpacity style={styles.formButtonSubmit}>
								<Text style={styles.formTextButton}>Entrar</Text>
							</TouchableOpacity>
							<Text
								style={styles.formForgetPassword}
								onPress={() => setShowForgetPasswordModal(true)}
							>Esqueci minha senha</Text>
						</View>
					</Form>
					<View style={styles.formSignUpField}>
						<Text style={styles.formSignUpTextField}>Não possui cadastro?
							<Text
								style={{ textDecorationLine: 'underline' }}
								onPress={() => setShowSignInModal(true)}
							>
								Clique aqui
							</Text>
						</Text>
					</View>
				</KeyboardAvoidingView>
			</View>

			<AlertModal
				title='Fale com o administrador'
				description='Para realizar seu cadastro fale com o administrador do condomínio'
				isOpen={showSignInModal}
				onClose={() => setShowSignInModal(false)}
			/>

			<FormModal
				title='Esqueci minha senha'
				description='Insira seu email de cadastro para recuperar sua senha'
				placeholder='e-mail de cadastro'
				isOpen={showForgetPasswordModal}
				onClose={() => setShowForgetPasswordModal(false)}
			/>
		</View>
	);
}
