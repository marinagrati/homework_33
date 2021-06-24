import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { lightGreen, pink } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { ROUTES } from "./constants";
// import LoginLayout from "./layouts/LoginLayout/LoginLayout";
// import MainLayout from "./layouts/MainLayout/MainLayout";
import { lazy } from "react";
import { OpenRoute, PrivateRoute } from "./utils/Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[400],
      main: lightGreen[500],
      dark: lightGreen[600],
    },
    secondary: {
      light: pink[400],
      main: pink[500],
      dark: pink[600],
    },
    // default:{
    //   light: pink[400],
    //   main: pink[500],
    //   dark: pink[600],
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 977,
      lg: 1173,
      xl: 1589,
      xxl: 1901,
    },
  },
});

const MainLayout = lazy(() => import(/* webpackChunkName: "MainLayout" */ "./layouts/MainLayout/MainLayout"));
const LoginLayout = lazy(() => import(/* webpackChunkName: "LoginLayout" */ "./layouts/LoginLayout/LoginLayout"));

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />

        {/*работает как обычный switch-case, перебирая роуты*/}
        <Switch>
          <PrivateRoute exact path={ROUTES.todos} component={MainLayout} auth={true} />
          <OpenRoute exact path={ROUTES.home} component={LoginLayout} />
          <Redirect to={ROUTES.home} />
          {/*<Route exact path={ROUTES.todos}>*/}
          {/*  <MainLayout />*/}
          {/*</Route>*/}

          {/*<Route path={ROUTES.home}>*/}
          {/*  <LoginLayout />*/}
          {/*</Route>*/}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
