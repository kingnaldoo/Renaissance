import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { ButtonSelect } from '../../../../components/Form/ButtonSelect';
import { ButtonSubmit } from '../../../../components/Form/ButtonSubmit';
import { Calendar } from 'react-native-calendars';
import { List } from 'react-native-paper';
import { styles } from './styles';

export function CreateReserve() {
	const data = [
		{
			title: 'Academia',
		},
		{
			title: 'Piscina'
		},
		{
			title: 'Academia',
		},
		{
			title: 'Piscina'
		},
		{
			title: 'Academia',
		},
		{
			title: 'Piscina'
		}
	];

	return (
		<View style={styles.container}>
			<View>
				<FlatList
					horizontal
					data={data}
					renderItem={({ item: rowData }) => {
						return (<ButtonSelect title={rowData.title} />);
					}}
				/>
				<Text style={styles.textInfo}>Escolha acima o espaço desejado para depois definir o dia e o horário da reserva</Text>
			</View>
			<View style={{ paddingHorizontal: 14 }}>
				<List.AccordionGroup>
					<List.Accordion title='Dias disponíveis' id='1'>
						<Calendar />
					</List.Accordion>

					<List.Accordion title='Horários disponíveis' id='2'>
						<ScrollView style={{ maxHeight: 140 }}>
							<List.Item title='Horario 1' />
							<List.Item title='Horario 2' />
							<List.Item title='Horario 3' />
						</ScrollView>
					</List.Accordion>
				</List.AccordionGroup>
			</View>
			<Text style={styles.textInfo}>Por favor, não permaneça no espaço reservado depois do seu horário. Use máscara sempre!</Text>
			<View style={{ paddingHorizontal: 14 }}>
				<ButtonSubmit title='Confirmar reserva' />
			</View>
		</View>
	);
}
