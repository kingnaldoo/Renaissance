import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
	header: {
		backgroundColor: theme.colors.header,
	},
	closeButton: {
		alignSelf: 'flex-end',
		marginVertical: -8
	}
});
