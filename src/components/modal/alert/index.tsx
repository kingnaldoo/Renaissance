import { Modal } from 'react-bootstrap';
import { AbstractModalHeaderProps } from 'react-bootstrap/esm/AbstractModalHeader';
import atemptIcon from '../../../assets/icons/atempt.svg';
import checkIcon from '../../../assets/icons/check.svg';
import './styles.scss';

interface AlertModalProps extends AbstractModalHeaderProps {
    isCheck: boolean;
    show: boolean;
    title: string;
    description: string;
}

export function AlertModal(props: AlertModalProps) {
    return ( 
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
                
            <Modal.Body>
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
                <img src={props.isCheck ? checkIcon : atemptIcon} alt="Atenção" />
            </Modal.Body>

        </Modal>
    );
}