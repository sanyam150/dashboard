import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import React from 'react';

const CircularProgress = ({ goalCompleted }) => {
  return (
    <>
      <CircularProgressbar
        value={goalCompleted}
        text={`${goalCompleted}%`}
        styles={buildStyles({
          strokeLinecap: 'butt',
          textSize: '20px',
          pathTransitionDuration: 0.5,
          pathColor: `rgb(113, 146, 252, ${goalCompleted / 100})`,
          textColor: '#ffffff',
          trailColor: '#273166',
          backgroundColor: '#3e98c7',
        })}
      />
    </>
  );
};

export default CircularProgress;
