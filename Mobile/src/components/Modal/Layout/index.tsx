import React, { ReactNode } from 'react';
import { Modal } from 'native-base';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface ILayoutProps extends IModalProps {
	children: ReactNode
}

export function Layout({ children, ...rest }: ILayoutProps) {
	Icon.loadFont();

	return(
		<Modal {...rest}>
			<Modal.Content>
				<Modal.Header style={styles.header}>
				{
					<Icon
						name='x-circle'
						size={25}
						style={styles.closeButton}
					/>
				}
				</Modal.Header>
				<Modal.Body>
					{children}
				</Modal.Body>
			</Modal.Content>
		</Modal>
	);
}
