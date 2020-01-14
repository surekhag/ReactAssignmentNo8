import React, {useState} from 'react';
import {Container, Grid, Button , Typography} from '@material-ui/core';
import Select from 'react-select'
// import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

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

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     color: red,
//   }}));

 function userInfo() {
    // const classes = useStyles();
  return (
    <React.Fragment>
    <h1>User Details</h1>
    <Container>      
    <Typography component="h1" variant="h6" color="inherit" noWrap>
    Hi User
    </Typography>
    <div >Your role is</div>

<form noValidate autoComplete="off">
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

export default userInfo;