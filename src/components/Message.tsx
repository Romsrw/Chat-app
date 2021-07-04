import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../store/store";
import { IMessage } from "../store/reducers/chatReducer";
import { makeStyles } from "@material-ui/core/styles";
import { uploadMessages } from "../store/actions/chatActions";
import { useEffect } from "react";
import { Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
    margin: 0,
  },
  messageWrapper: {
    width: "100%",
    listStyle: "none",
  },
  myMessage: {
    maxWidth: theme.spacing(50),
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: "fit-content",
    height: "fit-content",
    wordWrap: "break-word",
    marginLeft: "auto",
    borderRadius: theme.spacing(4),
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
    <ol className={classes.list}>
      {messages.map((message: IMessage) => (
        <li key={message.timestamp} className={classes.messageWrapper} >
          <Paper className={classes.myMessage}>
          <span>{message.text}</span>
          <span>{message.status}</span>
          </Paper>
          
        </li>
      ))}
    </ol>
  );
};

export default Message;
