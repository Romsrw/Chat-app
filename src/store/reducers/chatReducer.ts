import { MESSAGE_STATUSES } from './../constants/chatConstants';
import { CHAT_ACTIONS } from "../constants/chatConstants";

export interface IMessage {
    text: string;
    status: string;
    timestamp: number;
}

export interface ChatState {
    messages: IMessage[];
};

interface ChatAction {
    type: string;
    payload?: any;
};

const initialState: ChatState = {
    messages: [{ text: "blabla", status: "SENDING", timestamp: 123456789 }],
};

const chatReducer = (state: ChatState = initialState, action: ChatAction) => {
    switch (action.type) {
        case CHAT_ACTIONS.ADD_MESSAGE:
            return { ...state, 
                messages: [...state.messages, { text: action.payload, status: MESSAGE_STATUSES.SENDING, timestamp: Date.now() }] };
                case CHAT_ACTIONS.CHANGE_STATUS:
                    return {...state, messages: state.messages.map((message: IMessage) => ({ ...message, status: action.payload}))}
        default:
            return state;
    }

};

export default chatReducer;