import { USER_ACTIONS } from "../constants/authConstants"

export const loginAction = () => (dispatch: any) => {
    dispatch({ type: USER_ACTIONS.LOGIN })
};

export const logoutAction = () => (dispatch: any) => {
    dispatch({ type: USER_ACTIONS.LOGOUT })
};