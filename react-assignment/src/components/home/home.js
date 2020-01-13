import React, { Component } from 'react';
import { BrowserRouter ,Redirect,Route, Link } from "react-router-dom";
import SignIn from '../login/login'
import dashboard from '../dashboard/dashboard'
import userInfo from '../userInfo/userInfo'

const HomeModule = () => {
    return (
      <div>
        <BrowserRouter>          
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={SignIn} />
          <Route path="/dashboard" component={dashboard} />        
          <Route path="/userInfo" component={userInfo} />        
        </BrowserRouter>
      </div>
    );
  };
  
  export default HomeModule;