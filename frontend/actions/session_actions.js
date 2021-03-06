import * as APIUtil from '../util/session_api_util';
import * as UserUtil from '../util/user_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
            err => (dispatch(receiveErrors(err.responseJSON))))
            // err => console.log(err))
}

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
            err => (dispatch(receiveErrors(err.responseJSON))))
};

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
};

export const fetchUser = id => dispatch => {
    return UserUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
}