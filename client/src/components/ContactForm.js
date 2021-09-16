import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function ContactForm() {
    const classes = useStyles();

    return (
        <form className={classes.root} id='contact-form' noValidate autoComplete='off'>
            <TextField variant='outlined' label='First Name'></TextField>
            <TextField variant='outlined' label='Last Name'></TextField>
            <TextField variant='outlined' label='Email'></TextField>
        </form>
    )
}
