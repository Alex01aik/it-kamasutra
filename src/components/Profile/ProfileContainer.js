import React, {Component} from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
    componentDidMount(){
        axios.get(`http://localhost:3001/users`)
        .then(response => {
            
        })
    }
    render(){
        return(
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps =(state) => ({

})
let mapDispatchToProps =(dispatch) => ({
    
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect( mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);