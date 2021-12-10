import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';

import UserIcon from '../../../assets/icons/user.svg';
import CalendarIcon from '../../../assets/icons/calendar.svg';
import DocumentIcon from '../../../assets/icons/documents.svg';
import { ButtonHome } from '../../../components/Button';

export function Home({ navigation }: any) {
	return(
		<View style={styles.container}>
			<View style={styles.nameHeader}>
				<Text style={styles.nameText}>Bem vindo, Pedro Henrique</Text>
			</View>

			<ScrollView style={styles.listScroll}>
				<View style={styles.list}>
					<ButtonHome title='Meus dados' icon={<UserIcon style={styles.icon}/>} />

					<ButtonHome
						title='Reservas'
						icon={<CalendarIcon style={styles.icon}/>}
						onPress={() => navigation.navigate('Reserves')}
					/>

					<ButtonHome title='Documentos oficiais' icon={<DocumentIcon style={styles.icon}/>} />
				</View>
			</ScrollView>
		</View>
	);
}
