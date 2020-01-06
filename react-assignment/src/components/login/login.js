import React, { Component } from 'react';
import constants from '../../constants';
import {setUserData} from '../../actions/action';
import SignIn from './loginUI'
import { connect } from 'react-redux';
class login extends Component{   
    signInToSite=(email, password)=>{ 
    this.props.setUserData(email, password);
    }

    render() {       
        return(<>
        <SignIn login={this.signInToSite}/>
        </>
        ); 
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.status    
  });
  const mapDispatchToProps = (dispatch) => ({
    setUserData: (email, password) =>
      dispatch(setUserData(email, password)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(login);

// export default login;