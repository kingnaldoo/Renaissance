import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background
	},
	header: {
		backgroundColor: theme.colors.header
	},
	logo: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	title: {
		fontFamily: theme.fonts.title900
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	formField: {
		backgroundColor: '#F7F7F7',
		width: '75%',
		height: '98%',
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 20,
		top: -17,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		justifyContent: 'space-between'
	},
	formTitleField: {
		width: '100%',
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formTitle: {
		color: theme.colors.primary,
		fontFamily: theme.fonts.title500,
		fontSize: 36
	},
	formSignInField: {
		justifyContent: 'space-between',
		height: '50%'
	},
	formSignInInputField: {
	},
	formInputText: {
		color: theme.colors.text,
		fontFamily: theme.fonts.text400,
		borderBottomColor: '#DDDDDD',
		borderBottomWidth: 2,
		padding: 0,
		marginBottom: 30
	},
	formMaintainConnected: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	formCheckbox: {
	},
	formMaintainConnectedText: {
		color: theme.colors.text,
		width: '87%',
	},
	formSignInSubmitField: {

	},
	formButtonSubmit: {
		width: '100%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: theme.colors.primary
	},
	formTextButton: {
		fontFamily: theme.fonts.title900,
		color: 'white',
		fontSize: 18
	},
	formForgetPassword: {
		alignSelf: 'center',
		marginTop: 10,
		color: theme.colors.text
	},
	formSignUpField: {
		height: '10%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	formSignUpTextField: {
		color: theme.colors.text
	}
});
