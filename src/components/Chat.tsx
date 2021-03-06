import Navbar from "./Navbar";
import Message from "./Message";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../store/actions/chatActions";
import { Box, Button, TextField, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 48px)"
  },
  chat: {
    backgroundColor: "#c8dbe3",
    margin: theme.spacing(2, 0),
    minWidth: theme.spacing(100),
    overflow: 'auto',
    flex: 1,
  },
  inputMessage: {
    marginBottom: theme.spacing(2),
    minWidth: 800,
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: theme.spacing(2),
    backgroundColor: 'white'
  },
}));

const Chat = () => {

  const classes = useStyles();
  
  const [textMessage, setTextMessage] = useState("");

  const handleChangeInput = (e: any) => {
    setTextMessage(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSendMessage = () => {
    dispatch(sendMessage(textMessage));
    setTextMessage("");
  };

  const handleKeyPress = (e: any) => {
    if (!e.ctrlKey && e.keyCode === 13) {
      handleSendMessage();
    }
  };

  return (
    <>
      <Navbar />
      <Box className={classes.main}>
        <Paper className={classes.chat}>
          <Message />
        </Paper>
        <Box className={classes.inputMessage}>
          <TextField
            id="outlined-basic"
            label="Введите сообщение"
            variant="outlined"
            size="small"
            value={textMessage}
            onChange={handleChangeInput}
            onKeyDown={handleKeyPress}
            fullWidth
            autoComplete="off"
          />
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleSendMessage}
            disabled={!textMessage}
          >
            Отправить
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
