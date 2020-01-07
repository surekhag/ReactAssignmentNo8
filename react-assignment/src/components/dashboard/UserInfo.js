import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import  Container from '@material-ui/core';
import {Container, Grid, TextField, Typography} from '@material-ui/core';
import Title from './Title';
import Select from 'react-select'

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

//   const MyComponent = () => (
//     <Select options={options} />
//   )
  

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
<label for="my-input">Objective</label>  
<input id="outlined-basic" label="Objective" variant="outlined" /> <br /> <br />

<label for="my-input">Weightage</label>
<input id="outlined-basic" label="Weightage" variant="outlined" /><br /> <br />
 Key Results : 
 <Select options={ratingOptions}/>

 Rating : 
 {/* <Select  options={ratingOptions}/> */}
{/* <Select
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      /> */}
Comments : 
<textarea></textarea>
</form>
         
    </Container>
    </React.Fragment>
  );
}



