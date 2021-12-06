import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
	formButtonSubmit: {
		width: '100%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: theme.colors.primary
	},
	formTextButtonModal: {
		width: '100%',
		textAlign: 'center',
		color: theme.colors.primary,
		fontFamily: theme.fonts.title900,
		fontSize: 20
	},
	formTextButton: {
		fontFamily: theme.fonts.title900,
		color: 'white',
		fontSize: 18
	},
});
