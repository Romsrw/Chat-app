import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Redirect to="/login" />
        </Switch>
    </div>
  );
};

export default App;
