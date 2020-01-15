import React, { Component } from 'react';
import { BrowserRouter ,Redirect,Route, Link } from "react-router-dom";
import SignIn from '../login/login'
import dashboard from '../dashboard/dashboard';
import UserInfo from '../dashboard/UserInfo'
// import UserInfo from '../userInfo/userInfo'

const HomeModule = () => {
    return (
      <div>
        <BrowserRouter>          
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={SignIn} />
          <Route path="/dashboard" component={dashboard} />        
          <Route path="/userInfo" component={UserInfo} />        
        </BrowserRouter>
      </div>
    );
  };
  
  export default HomeModule;