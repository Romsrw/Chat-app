import Loader from "./Loader";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../store/store";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { auth } from "../firebase";
import { loginAction } from "../store/actions/authActions";

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
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading } = useSelector((state: IRootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [newUser, setNewUser] = useState(false);
  
  const handleChangeNewUser = (e: any) => {
    setNewUser(e.target.checked);
  };
  
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

  const checkPasswordHandler = (e: any) => {
    setCheckedPassword(e.target.value);
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const singIn = (e: any) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };

  const createUser = (e: any) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <Grid container className={classes.wrapper}>
      <Paper elevation={3} className={classes.formWrapper}>
        {loading && <Loader />}
        <Typography className={classes.title} variant="h4">
          Вход /{" "}
          <FormControlLabel
            control={
              <Switch
                name="checkedB"
                color="primary"
                onChange={handleChangeNewUser}
                checked={newUser}
              />
            }
            label="Новый пользователь"
          />
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
          {passwordDirty && passwordError && (
            <span style={{ color: "red", marginBottom: "5px" }}>
              {passwordError}
            </span>
          )}
          {newUser ? (
            <TextField
              className={classes.input}
              name="check_password"
              label="Повторите пароль"
              variant="outlined"
              size="small"
              value={checkedPassword}
              onChange={checkPasswordHandler}
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
          ) : null}
          <Button
            className={classes.loginBtn}
            size="small"
            variant="contained"
            color="primary"
            disabled={!formValid || newUser}
            onClick={singIn}
          >
            Войти
          </Button>
          <Button
            onClick={createUser}
            className={classes.loginBtn}
            disabled={!formValid || !newUser}
            size="small"
            variant="contained"
            color="primary"
          >
            Регистрация
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
