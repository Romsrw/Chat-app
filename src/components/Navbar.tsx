import { useDispatch } from "react-redux";
import { logoutAction } from "../store/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutAction());
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
