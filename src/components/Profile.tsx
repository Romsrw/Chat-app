import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import avatar from "../img/avatar.svg"
import { useSelector } from "react-redux";
import { IRootState } from './../store/store';

const useStyles = makeStyles((theme) => ({
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 48px)",
  },
  wrapper: {
    backgroundColor: "#c8dbe3",
    margin: theme.spacing(2, 0),
    minWidth: theme.spacing(100),
    overflow: "auto",
    flex: 1,
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { user } = useSelector((state: IRootState) => state.auth);
  return (
    <>
      <Navbar />
      <Box className={classes.main}>
        <Paper className={classes.wrapper}>
          <Typography className={classes.title} variant="h4">
            Личная информация
          </Typography>
          <form>
            <Box>
              <Avatar alt="user" src={avatar}/>
              <Typography>Загрузить Аватар</Typography>
              <Button variant="contained" color="primary">Выбрать</Button>
            </Box>
            <Box>
              <Box>Никнейм : {user.displayName}</Box>
              <Box>email: {user.email}</Box>
              <Box>photo: {user.photoUrl}</Box>
            </Box>
              <Button variant="contained" color="primary">Сохранить</Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
