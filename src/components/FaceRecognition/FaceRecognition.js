import React from 'react';
import './FaceRecognition.css';
import { Typography } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spread
});

const FaceRecognition = ({ imageURL, celebrityName, box }) => {
  const renderCelebrityName = celebrityName => {
    {
      if (celebrityName) {
        return (
          <Typography variant="h3" color="textSecondary">
            Yoo look like:{' '}
            <div style={{ textTransform: 'capitalize' }}>{celebrityName}</div>
          </Typography>
        );
      }
    }
  };

  return (
    <div className="center ma">
      <div className="celebrity-name">{renderCelebrityName(celebrityName)}</div>

      <div>
        <img
          className="mt3"
          id="inputImage"
          src={imageURL}
          width="400px"
          height="auto"
          alt=""
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default withStyles(styles)(FaceRecognition);
