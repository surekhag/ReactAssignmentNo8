import React, { Component } from 'react';
import constants from '../../constants';
import {signInToSite} from '../../actions/action';
import SignIn from './loginUI'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
class login extends Component{
    signInToSite=(email, password)=>{
    this.props.signInToSite(email, password);
    }

    static getDerivedStateFromProps(props, state){
      console.log(props);
    }
    
    render() {
        if(this.props.loginStatus && this.props.loginStatus == 'success'){
            return ( <Redirect to="/dashboard" />);
        }
        else{
            return(<>
                <SignIn login={this.signInToSite}/>
                </>
              ); 
        }       
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.status,
    data : state    
  });
  const mapDispatchToProps = (dispatch) => ({
    signInToSite: (email, password) =>
      dispatch(signInToSite(email, password)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(login);

