import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/usericon.jpg';
import { NavLink } from 'react-router-dom';


const UsersComponent = (props) => {

    return (
        <div>
        {props.users.map( u => 
            <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+ u.id}>
                            <img
                            className={styles.userPhoto}
                                src={u.photos.small != null ? u.photos.small : userPhoto }
                                alt="avatar" />
                        </NavLink>
                    </div>
                    <div> 
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{
                                props.toggleFollowingProgress(true, u.id);
                                props.unfollow(u.id);
                                props.toggleFollowingProgress(false, u.id); } } >
                                    unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{ 
                                props.toggleFollowingProgress(true, u.id);
                                props.follow(u.id);
                                props.toggleFollowingProgress(false, u.id);
                             } } >follow</button>}
                    </div>
                </span>
                <span>
                        <div>
                            {u.name}
                            {u.status}
                        </div>
                        <div>
                            {"u.location.country"},
                            {"u.location.city"}
                        </div> 
                </span>
            </div>
        )}
    </div>
    )
}

export default UsersComponent;