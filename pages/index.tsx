import Modal from '../kitter-ui/Modal';
import { useState } from 'react';

export default function Index() {

    const [modalAOpen, setModalAVisibility] = useState(false);
    const [modalBOpen, setModalBVisibility] = useState(false);
    const [modalCOpen, setModalCVisibility] = useState(false);

    const [modalCStep, setModalCStep] = useState(1);

    const modalCConfig = {
        minStep: 1,
        maxStep: 3
    };

    return <>
        <button onClick = { () => setModalAVisibility(true) }>Open Modal A</button>
        <button onClick = { () => setModalBVisibility(true) }>Open Modal B</button>
        <button onClick = { () => setModalCVisibility(true) }>Open Modal C</button>

        <Modal isOpen = { modalAOpen } handleClose = { () => setModalAVisibility(false) } title = 'Modal Series'>
            <h3>Modal A</h3>
            <p>This is modal <b>A</b></p>
        </Modal>

        <Modal isOpen = { modalBOpen } handleClose = { () => setModalBVisibility(false) } title = 'Modal Series'>
            <h3>Modal B</h3>
            <p>This is modal <b>B</b></p>
            <h4>This one has lots of content.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl, eget consectetur nisl nisi vel nisl. Nullam euismod, nisi</p>
        </Modal>

        <Modal isOpen = { modalCOpen } handleClose = { () => setModalCVisibility(false) } title = 'Modal Series' step = { modalCStep } stepSetter = { setModalCStep } config = { modalCConfig }>
            <h3>Modal C</h3>
            { modalCStep === 1 && <p>Rock</p> }
            { modalCStep === 2 && <p>Paper</p> }
            { modalCStep === 3 && <p>Scissors</p> }
        </Modal>
    </>;
}
