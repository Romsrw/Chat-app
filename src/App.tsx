import "./App.css";
import AppRouter from "./AppRouter";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <AppRouter>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        <Redirect to="/chat" />
      </Switch>
    </AppRouter>
  );
};

export default App;
