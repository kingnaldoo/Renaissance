import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
	placeButton: {
		backgroundColor: '#F7F7F7',
		width: 100,
		height: 100,
		marginHorizontal: 14,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		marginTop: 28,
		marginBottom: 14
	},
	title: {
		color: theme.colors.primary
	}
});
