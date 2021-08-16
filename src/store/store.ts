import { applyMiddleware, CombinedState, combineReducers, createStore, Reducer } from "redux";
import thunk from "redux-thunk";
import auth, { UserState } from "./reducers/authReducer";
import chat, { ChatState } from "./reducers/chatReducer";

export interface IRootState {
    auth: UserState;
    chat: ChatState;
};

export const Reducers: Reducer<CombinedState<IRootState>> = combineReducers({
    auth,
    chat
});

export const store = createStore(Reducers, applyMiddleware(thunk));