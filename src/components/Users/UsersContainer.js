import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator , unfollow, follow, toggleFollowingProgress } from '../../redux/usersReducer';
import Users from './UsersComponent';
import Preloader from '../../components/common/Preloader';
import { compose } from 'redux';
import { getUsers } from '../../redux/users-selector';

class UsersClassContainer extends Component {
    
    componentDidMount(){
        this.props.getUsers();
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
            </>
    }
    
}

const mapStateToProps= (state) => {
    return {
        users: getUsers(state),
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(connect(mapStateToProps, {follow,
    unfollow, toggleFollowingProgress,
    getUsers: getUsersThunkCreator
    }))( UsersClassContainer);