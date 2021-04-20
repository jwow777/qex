import { CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import News from "./News";
import Profile from "./Profile";
import ProtectRoute from "./ProtectedRoute";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Тестовый пользователь
  const data = { username: "user", password: "12345" };
  localStorage.setItem("data", JSON.stringify(data));

  function handleLogin() {
    setLoggedIn(true);
  }

  function unlockProfile() {
    const token = localStorage.getItem("token");
    if (token === "2wqdkhgsdquwuhsjaids") {
      return setLoggedIn(true);
    }
  }

  useEffect(() => unlockProfile(), []);

  return (
    <>
      <CssBaseline />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <ProtectRoute
          path="/profile"
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          component={Profile}
        />
        <Route path="/sign-in">
          <Login handleLogin={handleLogin} />
        </Route>
      </Switch>
    </>
  );
}
