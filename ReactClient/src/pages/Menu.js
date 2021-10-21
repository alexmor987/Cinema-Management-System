import { useEffect } from "react";
import Navbar from "../components/Navbar";
import LoginComp from "../pages/Login";
import MoviesComp from "../pages/movies/Movies";
import SubscriptionsComp from "../pages/subscriptions/Subscriptions";
import UsersManagementComp from "../pages/usersManagement/UsersManagement";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import authSrv from "../services/auth";

function MenuComp(props) {
  let { path, url } = useRouteMatch();
  useEffect(() => {
    let token = authSrv.getToken();
    if (token === undefined) {
      props.history.push("/");
    }
  }, []);
  return (
    <div>
      <Navbar url={url} />
      <Switch>
        <Route exact path="/" component={LoginComp} />

        <Route path={path + "/movies"}>
          <MoviesComp />
        </Route>

        <Route path={path + "/subscriptions"}>
          <SubscriptionsComp />
        </Route>

        <Route path={path + "/usersmanagement"}>
          <UsersManagementComp />
        </Route>
      </Switch>
    </div>
  );
}

export default MenuComp;
