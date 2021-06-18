import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { IMessage } from "../store/reducers/chatReducer";

const Message = () => {
    const { messages } = useSelector((state: IRootState) => state.chat);

    return (
        <ol>
            {messages.map((message: IMessage) => (
            <div key={message.timestamp}>
              <span>{message.text}</span>
              <span>{message.status}</span>
            </div>
          ))}
        </ol>
    )
};

export default Message;