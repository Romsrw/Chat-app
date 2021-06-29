import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../store/store";
import { IMessage } from "../store/reducers/chatReducer";
import { makeStyles } from "@material-ui/core/styles";
import { uploadMessages } from "../store/actions/chatActions";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  myMessage: {
    border: "1px solid black",
    listStyle: "none",
    maxWidth: theme.spacing(50),
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: "fit-content",
    height: "fit-content",
    wordWrap: "break-word",
    marginLeft: "auto",
    borderRadius: theme.spacing(4)
  },
}));

const Message = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(uploadMessages())
   }, [dispatch]);

  const { messages } = useSelector((state: IRootState) => state.chat);

  return (
    <ol>
      {messages.map((message: IMessage) => (
        <li key={message.timestamp} className={classes.myMessage}>
          <span>{message.text}</span>
          <span>{message.status}</span>
        </li>
      ))}
    </ol>
  );
};

export default Message;
