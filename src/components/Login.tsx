import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Paper, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  formWrapper: {
    padding: theme.spacing(3),
    minWidth: theme.spacing(40),
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  loginBtn: {
    height: theme.spacing(5)
  }
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const {isAuth} = useSelector((state: IRootState ) => state.auth);

  useEffect(() => {
    if(isAuth) {
      history.push('/chat');
    }
  }, [history, isAuth]);

  return (
    <Grid container className={classes.wrapper}>
      <Paper elevation={3} className={classes.formWrapper}>
        <Typography  className={classes.title} variant="h4">Вход</Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Введите email"
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Введите пароль"
            variant="outlined"
            size="small"
          />
          <Button className={classes.loginBtn} size="small" variant="contained" color="primary">
            Войти
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
