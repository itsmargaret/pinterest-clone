export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, pin) => {
    return {
        type: OPEN_MODAL,
        modal, 
        pin
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
