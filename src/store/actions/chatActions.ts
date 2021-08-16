import { CHAT_ACTIONS, MESSAGE_STATUSES } from "../constants/chatConstants";
import { firestore } from "../../firebase";

export const uploadMessages = () => (dispatch: any) => {
    firestore.collection("message")
        .orderBy('timestamp')
        .get()
        .then((response) => {
            const uploadingMessage = response.docs.map(doc => doc.data());
            dispatch({ type: CHAT_ACTIONS.UPLOAD_MESSAGE, payload: uploadingMessage });
        })
        .catch((error) => {
            console.log(error)
        });
};


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
