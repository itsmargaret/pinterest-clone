import * as PinUtil from '../util/pin_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

const receivePins = ({pins, boards}) => ({
    type: RECEIVE_ALL_PINS,
    pins,
    boards
});

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const removePin = id => ({
    type: REMOVE_PIN,
    id
});

export const fetchPins = () => dispatch => (
    PinUtil.fetchPins()
        .then(pins => dispatch(receivePins(pins)))
);

export const fetchPin = id => dispatch => (
    PinUtil.fetchPin(id)
        .then(pin => dispatch(receivePin(pin)))
)

export const createPin = pin => dispatch => (
    PinUtil.createPin(pin)
        .then(pin => dispatch(receivePin(pin)))
)

export const updatePin = pin => dispatch => (
    PinUtil.createPin(pin)
        .then(pin => dispatch(receivePin(pin)))
)

export const deletePin = id => dispatch => (
    PinUtil.deletePin(id)
        .then(() => dispatch(removePin(id)))
)

export const createPinning = (pin_id, board_id) => dispatch => (
    PinUtil.createPinning(pin_id, board_id)
        .then((pin) => dispatch(receivePin(pin)))
)

export const deletePinning = id => dispatch => (
    BoardUtil.deletePinning(id)
        .then((pin) => dispatch(receivePin(pin)))
)