import React, { ReactNode } from 'react';
import { ScrollView, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface ReserveProps extends TouchableOpacityProps {
	icon: ReactNode;
	title: string;
	schedule: number;
	data: string;
}

export function MyReserves() {
	Icon.loadFont();

	function Reserve({ icon, title, schedule, data, ...rest }: ReserveProps) {
		return(
			<View style={styles.listItem}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.iconArea}>
						{icon}
					</View>
					<View style={{ justifyContent: 'center' }}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.schedule}>{schedule}:00 - {schedule}:50 | {data}</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.iconArea} {...rest}>
					<Icon name='trash-2' size={25} color={'#418C41'} style={{ alignSelf: 'flex-end' }}/>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			<Reserve icon={<Icon name='activity' size={25} color={'#000'}/>} title='Academia' schedule={6} data='20/09/2000'/>
		</ScrollView>
	);
}
