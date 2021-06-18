import { USER_ACTIONS } from "../constants/authConstants";

export interface UserState {
    userName: string;
    isAuth: boolean;
    loading: boolean;
    error: null | string;
};

interface UserAction {
    type: string;
    payload?: any;
};

// const SET_USER = 'SET_USER';

const initialState: UserState = {
    userName: '',
    isAuth: true,
    loading: false,
    error: null
};

const authReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            return { ...state, isAuth: true }
        case USER_ACTIONS.LOGOUT:
            return { ...state, isAuth: false }
        default:
            return state;
    }

};

export default authReducer;