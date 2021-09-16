import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { blue, orange, red } from "@material-ui/core/colors";
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "37ch",
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: blue
}
});


export default function ContactForm() {
  const classes = useStyles();

  return (
    <Box>
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      id="contact-form-root"
    >
      <header className="contact-form-header">
        <div className="contact-form-subheader1">Introduce Yourself!</div>
        <div className="contact-form-subheader2">
          The organization where your pet is housed will receive the details
          below
        </div>
      </header>
      <div className="nameSection">
        <TextField variant="outlined" label="First Name" />
        <TextField variant="outlined" label="Last Name" />
      </div>
      <TextField variant="outlined" label="Email" />
      <TextField variant="outlined" label="Phone Number" />
      <TextField 
        variant="outlined" 
        label="Message" 
        multiline 
        maxRows={4} />
      <Button variant="contained" className="submitButton" color="primary" size="small">
        Submit
      </Button>
    </form>
    </Box>
  );
}
