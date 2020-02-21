import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function InputBox(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="text1"
        label="Text"
        variant="standard"
        onChange={props.onChange}
      />
      <TextField
        id="text2"
        label="Text"
        variant="standard"
        onChange={props.onChange2}
      />
    </form>
  );
}
