import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import  Container from '@material-ui/core';
import {Container, Grid, TextField, Typography, ListItem} from '@material-ui/core';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>User Details</Title>
      <Container>
      {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            // value={}
            onChange={e => {
              handleChange(e);
              }}
            autoComplete="current-password"
          /> */}
 <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Hi User
          </Typography>
          <div>Your role is</div>

<form className={classes.root} noValidate autoComplete="off">
<label for="my-input">Objective</label>  
<TextField id="outlined-basic" label="Objective" variant="outlined" /> <br /> <br />

<label for="my-input">Weightage</label>
<TextField id="outlined-basic" label="Weightage" variant="outlined" /><br /> <br />
<ListItem /> 1

<label for="my-input">Rating</label>
<TextField id="outlined-basic" label="Weightage" variant="outlined" /><br /> <br />

<label for="my-input">Comments</label>
<TextField id="outlined-basic" label="Weightage" variant="outlined" /><br /> <br />

</form>
         
    </Container>
    </React.Fragment>
  );
}



