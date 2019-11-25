import React from 'react';
import './ImageLinkForm.css';
import Rank from '../Rank/Rank';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  ...theme.spread
});

const ImageLinkForm = ({
  onInputChange,
  onPictureSubmit,
  entries,
  name,
  classes
}) => {
  return (
    <div className={classes.form}>
      <Typography
        variant="h2"
        align="center"
        color="primary"
        className={classes.pageTitle}
      >
        {'What celebrity do you look like?'}
      </Typography>
      <Rank name={name} entries={entries} />
      <form noValidate>
        <TextField
          id="url"
          name="url"
          type="text"
          label="Image URL"
          className={classes.inputURL}
          onChange={onInputChange}
          fullWidth
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={false}
          onClick={onPictureSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(ImageLinkForm);
