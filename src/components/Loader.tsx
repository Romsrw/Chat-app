import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 100
    },
  }));

const Loader = () => {
    const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
};
export default Loader;