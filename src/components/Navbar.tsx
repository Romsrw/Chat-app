import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/actions/authActions";
import { IRootState } from "../store/store";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const { isAuth, loading } = useSelector((state: IRootState) => state.auth);

  const dispatch = useDispatch();
  console.log(isAuth);
  const handleClick = () => {
    dispatch(logoutAction());
    console.log(isAuth);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justify={"flex-end"}>
            <Button
              className={classes.btn}
              size="small"
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Выйти
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
