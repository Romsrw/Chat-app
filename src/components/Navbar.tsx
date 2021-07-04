import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../store/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";

const useStyles = makeStyles((theme) => ({
  MenuBtn: {
    margin: theme.spacing(1, 30, 1, 0),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleProfile = () => {
    history.push("/profile");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justify={"flex-end"}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="outlined"
              color="inherit"
              className={classes.MenuBtn}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>
                <PersonOutlineOutlinedIcon fontSize="small" />
                Профиль
              </MenuItem>
              <MenuItem onClick={handleClickLogOut}>
                <MeetingRoomOutlinedIcon />
                Выйти
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
