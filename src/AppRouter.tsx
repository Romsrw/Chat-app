import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";

const AppRouter: React.FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        history.push("/chat");
      } else {
        history.push("/login");
      }
    });
  }, [history]);

  return <div className="main">{children}</div>;
};

export default AppRouter;

// <Switch>
//       <Route path="/login" component={Login} />
//       <Route path="/chat" component={Chat} />
//       <Redirect to="/login" />
//     </Switch>
