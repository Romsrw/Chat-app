import { USER_ACTIONS } from "../constants/authConstants";
import { auth } from "../../firebase";

export const loginAction = (email: string, password: string) => (dispatch: any) => {
    dispatch({ type: USER_ACTIONS.LOADING, payload: true })
    auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            if (userCredential.user) {
                const { uid, displayName, email } = userCredential.user;
                dispatch({ type: USER_ACTIONS.LOGIN })
                dispatch({ type: USER_ACTIONS.SET_USER_DATA, payload: { uid, displayName, email } })
                // payload: { uid, displayName, email }
                console.log(userCredential.user)
            }
        })
        .catch(error => {
            console.log(error)
        }).finally(() => {
            dispatch({ type: USER_ACTIONS.LOADING, payload: false })
        })
};

export const logoutAction = () => (dispatch: any) => {
    dispatch({ type: USER_ACTIONS.LOADING, payload: true })
    auth
        .signOut()
        .then(() => {
            dispatch({ type: USER_ACTIONS.LOGOUT })
        })
        .catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch({ type: USER_ACTIONS.LOADING, payload: false })
        });
};