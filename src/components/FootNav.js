import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Public } from '@material-ui/icons';

import DailyUpdate from './dailyUpdate'

const useStyles = makeStyles({
  root: {
      position: 'relative',
      bottom: 0,
      right: 0,
      left: 0,
      // paddingTop : "30px",
      // paddingTop: "800px"
  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
          console.log(newValue)
          screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<Public />} >
      </BottomNavigationAction>
      <BottomNavigationAction label="Country Stats" icon={<LocationOnIcon />} >
      </BottomNavigationAction>
    </BottomNavigation>
  );
}
