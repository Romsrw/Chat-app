import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUserDataAction } from "./store/actions/authActions";
import { IUser } from "./store/reducers/authReducer";

const AppRouter: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch(setUserDataAction(user as IUser))
        console.log(user)
        history.push("/chat");
      } else {
        history.push("/login");
      }
    });
  }, [history, dispatch]);

  return <div className="main">{children}</div>;
};

export default AppRouter;

// <Switch>
//       <Route path="/login" component={Login} />
//       <Route path="/chat" component={Chat} />
//       <Redirect to="/login" />
//     </Switch>
