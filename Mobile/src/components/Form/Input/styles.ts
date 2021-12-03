import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
	inputSafeArea: {
		borderBottomColor: '#DDDDDD',
		borderBottomWidth: 2,
		marginBottom: 30,
		flexDirection: 'row'
	},
	formInputText: {
		color: theme.colors.text,
		fontFamily: theme.fonts.text400,
		padding: 0,
		width: '85%'
	},
	infoIcon: {
		width: '15%',
		paddingHorizontal: 5
	}
});
