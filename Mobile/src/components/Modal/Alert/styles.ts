import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
	title: {
		alignSelf: 'center',
		color: theme.colors.text,
		fontFamily: theme.fonts.title500,
		fontSize: 19
	},
	description: {
		textAlign: 'center',
		color: theme.colors.text,
		fontFamily: theme.fonts.text400,
		width: '70%',
		alignSelf: 'center',
		marginVertical: 13
	},
	icon: {
		alignSelf: 'center'
	}
});
