import { CHAT_ACTIONS, MESSAGE_STATUSES } from "../constants/chatConstants";
import { firestore } from "../../firebase";

export const sendMessage = (text: string) => (dispatch: any) => {
    const timestamp = Date.now();
    const message = {
        text,
        timestamp,
    };
    dispatch({ type: CHAT_ACTIONS.ADD_MESSAGE, payload: { ...message, status: MESSAGE_STATUSES.SENDING } });
    firestore
        .collection('message')
        .add(message)
        .then(() => dispatch({ type: CHAT_ACTIONS.CHANGE_STATUS, payload: { timestamp, status: MESSAGE_STATUSES.DONE } }))
        .catch((error) => {
            console.log(error)
        });
};