import React, { Component } from "react";


import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "../../images/logo.jpg";

const styles = theme => ({
  ...theme.spread
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = (e) => {
    e.preventDefault();
    console.log('signing in');
    fetch("https://ancient-sands-35408.herokuapp.com/signIn", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange, classes } = this.props;

    return (
      
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={Icon} alt="icon" className={classes.image} />
          <Typography variant="h2" className={classes.title}>
            Sign In
          </Typography>
          <form noValidate>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.onEmailChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.onPasswordChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={false}
              onClick={this.onSubmitSignIn}
            >
              Submit
            </Button>
            <br />
            <br />
            <small>
              <Typography variant="body2">Don't have an account? sign up
              <button onClick={() => onRouteChange("register")}
              style={{border: 0}}> <Typography variant="button" align="left">here</Typography></button></Typography>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>

    );
  }
}

export default withStyles(styles)(SignIn);
