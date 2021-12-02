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
	card: {
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
	},
	formTitleField: {
		width: '100%',
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red'
	},
	formTitle: {
		color: theme.colors.primary,
		fontFamily: theme.fonts.text300,
		fontSize: 36
	},
	input: {

	}
});
