import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');

function Modal({children, onClose}) {
    
    const el = useMemo(() => {
        let el = document.createElement('div');
        el.classList.add('backdrop');
        el.addEventListener('click', e => {
            if(e.target === e.currentTarget) {
                onClose();
            }
        });
       
        return el;
    }, [onClose])

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => modalRoot.removeChild(el);
    }, [el])

    return ReactDOM.createPortal(
        children,
        el
    );
}

export default Modal;