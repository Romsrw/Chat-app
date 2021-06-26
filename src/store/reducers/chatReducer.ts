import { CHAT_ACTIONS } from "../constants/chatConstants";

export interface IMessage {
    uid: string;
    displayName?: string;
    photoURL?: string;
    timestamp: string;
    text: string;
    status?: string;
}

export interface ChatState {
    messages: IMessage[];
};

interface ChatAction {
    type: string;
    payload?: any;
};

const initialState: ChatState = {
    messages: [],
};

const chatReducer = (state: ChatState = initialState, action: ChatAction) => {
    switch (action.type) {

        case CHAT_ACTIONS.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        case CHAT_ACTIONS.CHANGE_STATUS:
            return {
                ...state, messages: state.messages
                    .map((message: IMessage) => message.timestamp === action.payload.timestamp
                        ? ({ ...message, status: action.payload.status })
                        : message)
            };

        default:
            return state;
    }

};

export default chatReducer;