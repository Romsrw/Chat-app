import { USER_ACTIONS } from "../constants/authConstants";

export interface IUser {
    displayName: string;
    uid: string;
    photoUrl?: string;
    phoneNumber?: string;
    email: string;
};

export interface UserState {
    user: IUser;
    isAuth: boolean;
    loading: boolean;
    error: null | string;
};

interface UserAction {
    type: string;
    payload?: any;
};

const initialState: UserState = {
    user: {
        displayName: "",
        uid: "",
        email: "",
    },
    isAuth: false,
    loading: false,
    error: null
};

const authReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            return { ...state, isAuth: true }
        case USER_ACTIONS.LOGOUT:
            return { ...state, isAuth: false }
        case USER_ACTIONS.LOADING:
            return { ...state, loading: action.payload }
        case USER_ACTIONS.SET_USER_DATA:
            return { ...state, user: { ...state.user, ...action.payload } }
        //{...state, user: {...state.user, ...action.payload }}
        default:
            return state;
    }

};

export default authReducer;