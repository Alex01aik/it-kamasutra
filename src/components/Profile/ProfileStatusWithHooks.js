import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    

    let [editMode, seteditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateMode = () => {
        seteditMode(true);
    }

    const deactivateMode = () => {
        seteditMode(false);
        // props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus({
            status: e.currentTarget.value
        });
    }

    return(
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus
                    value={status}
                        onBlur={deactivateMode}
                        onChange={onStatusChange}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;