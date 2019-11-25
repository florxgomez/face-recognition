import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "../../images/logo.jpg";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spread
});

class Register extends Component {
constructor(props){
		super(props);
		this.state = {
			email:'',
			password: '',
			name: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitRegister = (e) => {
		e.preventDefault();
		fetch('https://ancient-sands-35408.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		 .then(response => response.json())
		 .then(user => {
		 	if(user.id){
		 		this.props.loadUser(user);
		 		this.props.onRouteChange('home');
		 	}
		 })
	}

	render(){
		const { classes } = this.props;
		return(
			<Grid container className={classes.form}>
			<Grid item sm />
        <Grid item sm >
          <img src={Icon} alt="icon" className={classes.image} />
          <Typography variant="h2" className={classes.title}>
            Sign Up
					</Typography>
					<form noValidate>
            <TextField
              id="name"
              name="name"
              type="text"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.onNameChange}
              fullWidth
						/>
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
              onClick={this.onSubmitRegister}
            >
              Submit
						</Button>
						</form>
						</Grid>
						<Grid item sm />
			</Grid>

		);
	}
}

export default withStyles(styles)(Register);