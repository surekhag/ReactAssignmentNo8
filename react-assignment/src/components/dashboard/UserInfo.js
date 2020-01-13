import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import  Container from '@material-ui/core';
import {Container, Grid, Button , Typography} from '@material-ui/core';
import Title from './Title';
import Select from 'react-select'
// import Select from '@material-ui/core/Select';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
const ratingOptions = [
    {value:11, label : 11 },
    {value:12, label : 12 },
    {value:13, label : 13 },
    {value:14, label : 14 },
    {value:15, label : 15 },
    {value:16, label : 16 },
    {value:17, label : 17 },
    {value:18, label : 18 },
    {value:19, label : 19 },
    {value:20, label : 20 }
];
const keyResults = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Title>User Details</Title>
    <Container>      
    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
    Hi User
    </Typography>
    <div>Your role is</div>

<form className={classes.root} noValidate autoComplete="off">
  <table>   
    <tr>
<th>Objective</th> <td><input id="outlined-basic" label="Objective" variant="outlined" />
</td>
    </tr>
    <tr>
<th>Weightage</th> <td><input id="outlined-basic" label="Weightage" variant="outlined" /></td>
    </tr>
    <tr>
<th>Key Results  </th> <td><Select options={ratingOptions}/></td>
    </tr>
    <tr>
<th>Rating  </th> <td><Select  options={ratingOptions}/> </td>
    </tr>
    <tr>
<th>Comments</th> <td><textarea></textarea></td>
    </tr>   
  </table>
<table>
<tr>
<th>General Comments</th> <td><textarea></textarea></td>
    </tr>
    <tr>
      <Button variant="contained" color="primary">Submit</Button >
      <Button variant="contained" color="primary">Preview</Button >   
      <br/> <br/>
 </tr>
</table>
   
  
</form>
         
    </Container>
    </React.Fragment>
  );
}
