import React, { Component } from 'react';
import constants from '../../constants';
import {signInToSite} from '../../actions/action';
import SignIn from './loginUI'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
class login extends Component{   
    state = {
        redirect: false
      }

    signInToSite=(email, password)=>{ 
    this.props.signInToSite(email, password);
    }

    static getDerivedStateFromProps(props, state) {        
        if(props.loginStatus){
            return {
                ...state,
                redirect: props.loginStatus
            }
        }
        else 
        return state;
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
    loginStatus: state.status    
  });
  const mapDispatchToProps = (dispatch) => ({
    signInToSite: (email, password) =>
      dispatch(signInToSite(email, password)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(login);

