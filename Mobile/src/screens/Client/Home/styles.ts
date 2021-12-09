import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	nameHeader: {
		width: '100%',
		height: 50,
		backgroundColor: theme.colors.header,
		justifyContent: 'center',
		alignItems: 'center'
	},
	nameText: {
		color: '#FFF',
		fontSize: 18,
		fontFamily: theme.fonts.text300
	},
	listScroll: {
		flex: 1,
	},
	list: {
		height: '100%',
		flexDirection: 'column',
		paddingHorizontal: 14,
		paddingTop: 28,
		paddingBottom: 14,
		justifyContent: 'space-between',
	},
	icon: {
		height: 40,
		alignSelf: 'center'
	}

});
