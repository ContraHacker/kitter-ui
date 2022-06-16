import { useEffect } from 'react';
import styles from './Modal.module.scss';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    title?: string;
    step?: number;
    stepSetter?: (step: number) => void;
    config?: {
        minStep: number;
        maxStep: number;
    };
    children: React.ReactNode;
}

export default function Modal({ isOpen, title, children, handleClose, step, config, stepSetter }: Props) {

    function resetStepAndClose() {
        if (config && stepSetter) stepSetter(config.minStep);
        handleClose();
    }

    useEffect(() => {
        document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape') { resetStepAndClose(); } });
        return () => {
            document.removeEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape') { resetStepAndClose(); } });
        };
    });

    if (!isOpen) return null;

    function incStep() {
        if (step && config && (step < config.maxStep)) stepSetter && stepSetter(step + 1);
    }

    function decStep() {
        if (step && config && (step > config.minStep)) stepSetter && stepSetter(step - 1);
    }

    return <div className = { styles.modal }>
        <div className = { styles.content }>
            <div className = { styles.header }>
                <h4>{ title }</h4>
                <button className = { styles.closeBtn } onClick = { resetStepAndClose }>&times;</button>
            </div>
            { children }
            {
                stepSetter && <div className = { styles.footer }>
                    <button onClick = { decStep }>&lt;</button>
                    <p className = { styles.stepIndicator }>Step { step }</p>
                    <button onClick = { incStep }>&gt;</button>
                </div>
            }
        </div>
    </div>;
}
