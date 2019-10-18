import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 link dim near-white pointer"
          >
            Sign Out
          </p>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Fragment>
            <Button color="inherit">
              <p
                onClick={() => onRouteChange("signIn")}
                className="mr4 f3 link dim near-white pointer"
              >
                Login
              </p>
            </Button>
            <Button color="inherit">
              <p
                onClick={() => onRouteChange("register")}
                className="f3 link dim near-white pointer"
              >
                Sign Up
              </p>
            </Button>
          </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
};

export default Navigation;
