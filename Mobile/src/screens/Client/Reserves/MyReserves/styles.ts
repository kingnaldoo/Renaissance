import { StyleSheet } from 'react-native';
import { theme } from '../../../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 28,
		paddingHorizontal: 14
	},
	listItem: {
		width: '100%',
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	iconArea: {
		width: '20%',
		height: '100%',
		justifyContent: 'center',
	},
	title: {
		fontFamily: theme.fonts.title500,
		color: theme.colors.text
	},
	schedule: {
		color: theme.colors.text
	}
});
