import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from '@material-ui/core';

const styles = theme => ({
  ...theme.spread
});

const Rank = ({name, entries, classes}) => {
	return (
		<Paper className={classes.paper}>
			<Typography color="secondary" variant="h4" align="center">
				{`${name}, your current entry count is #${entries}`}
				</Typography>
		</Paper>
	);
}

export default withStyles(styles)(Rank);