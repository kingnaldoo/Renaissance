import { StyleSheet } from 'react-native';
import { theme } from '../../../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 28
	},
	textInfo: {
		paddingHorizontal: 14,
		color: theme.colors.text
	}
});
