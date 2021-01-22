import React, { useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

import DailyUpdate from './dailyUpdate'
import EachCountry from './EachCountry'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {

  const [comingName, setComingName] = useState("")
  const [forme, setForme] = useState(0)


function takeInput(event) {
    setComingName(event.target.value)
}
function handleSubmit(event) {
  event.preventDefault()
  setForme( 1 )
}

const classes = useStyles();

  if ( forme !== 0 ) {
    return (
      <>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
              Convid19-Tracker
              </Typography>

              <form onSubmit={()=>{setForme( 0 )}}>
                <input type="submit" value="Back" />
            </form>

            </Toolbar>
          </AppBar>
        </div>
        <EachCountry country={comingName} />
      </>
    );
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Convid19-Tracker
            </Typography>

            <form onSubmit={handleSubmit}>
                <label >
                  Enter Country:
                  <input  type="text" name="country" onChange={takeInput} />
                </label>
                <input type="submit" value="Search" />
            </form>

          </Toolbar>
        </AppBar>
      </div>
      <DailyUpdate />
    </>
  );
}
