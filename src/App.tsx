import "./App.css";
import AppRouter from "./AppRouter";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <AppRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/chat" />
      </Switch>
    </AppRouter>
  );
};

export default App;
