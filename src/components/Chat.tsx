import Navbar from "./Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Message from "./Message";
import { sendMessage } from "../store/actions/chatActions";
import { Box, Button, TextField, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chat: {
    flex: 1,
    minWidth: theme.spacing(100),

  }
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
    <Box alignItems="center" display="flex" flexDirection="column" flex={1}>
      <Paper className={classes.chat}>
        <Message />
      </Paper>
      <Box style={{ minWidth: 800, display: "flex", justifyContent: "flex-end" }}>
        <TextField
          id="outlined-basic"
          label="Введите сообщение"
          variant="outlined"
          size="small"
          value={textMessage}
          onChange={handleChangeInput}
          onKeyDown={handleKeyPress}
          fullWidth
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
