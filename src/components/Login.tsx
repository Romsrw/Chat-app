import Loader from "./Loader";
import { IRootState } from "../store/store";
import { loginAction } from "../store/actions/authActions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
    height: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  LinkReg: {
    textDecoration: "none",
    cursor: "pointer"
  }
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading } = useSelector((state: IRootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 15) {
      setPasswordError("Пароль должен быть длинее 4 и меньше 15");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const signIn = (e: any) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };

  return (
    <Grid container className={classes.wrapper}>
      <Paper elevation={3} className={classes.formWrapper}>
        {loading && <Loader />}
        <Typography className={classes.title} variant="h4">
          Вход
        </Typography>
        <form className={classes.form} noValidate>
          {emailDirty && emailError && (
            <span style={{ color: "red", marginBottom: "5px" }}>
              {emailError}
            </span>
          )}
          <TextField
            className={classes.input}
            name="email"
            label="Введите email"
            variant="outlined"
            size="small"
            autoComplete="email"
            value={email}
            onChange={emailHandler}
            onBlur={(e) => blurHandler(e)}
            InputProps={{
              type: "email",
            }}
          />
          {passwordDirty && passwordError && (
            <span style={{ color: "red", marginBottom: "5px" }}>
              {passwordError}
            </span>
          )}
          <TextField
            className={classes.input}
            name="password"
            label="Введите пароль"
            variant="outlined"
            size="small"
            value={password}
            onChange={passwordHandler}
            onBlur={(e) => blurHandler(e)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              autoComplete: "current-password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            className={classes.loginBtn}
            size="small"
            variant="contained"
            color="primary"
            disabled={!formValid}
            onClick={signIn}
          >
            Войти
          </Button>
        </form>
        <Typography>
          Нет аккаунта? <Link  className={classes.LinkReg} to="/registration">Перейти к регистрации</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
