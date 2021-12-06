import React, { ReactNode } from 'react';
import { Modal } from 'native-base';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface ILayoutProps extends IModalProps {
	children: ReactNode,
	isOpen: boolean
}

export function Layout({ children, isOpen, ...rest }: ILayoutProps) {
	Icon.loadFont();

	return(
		<Modal isOpen={isOpen} {...rest}>
			<Modal.Content>
				<Modal.CloseButton opacity={0}/>
				<Modal.Header style={styles.header}>
					{<Icon name='x-circle' size={20} style={styles.closeButton}/>}
				</Modal.Header>
				<Modal.Body>
					{children}
				</Modal.Body>
			</Modal.Content>
		</Modal>
	);
}
