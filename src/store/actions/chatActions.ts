import { CHAT_ACTIONS, MESSAGE_STATUSES } from "../constants/chatConstants";

export const sendMessage = (text: string) => (dispatch: any) => {
    dispatch({ type: CHAT_ACTIONS.ADD_MESSAGE, payload: text });
    setTimeout(() => {
        dispatch({ type: CHAT_ACTIONS.CHANGE_STATUS, payload: MESSAGE_STATUSES.DONE });
    }, 1000);
};