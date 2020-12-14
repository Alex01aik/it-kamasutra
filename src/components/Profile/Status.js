import React from 'react';

class Status extends React.Component {
    // status = this.props.status
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        }); 
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        }); 
    }

    onStatusChange = (e) => {
        this.setState({
        status: e.currentTarget.value
        });
    }

    render(){
        return <div>
        {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>status</span>
            </div>
        }
        {this.state.editMode &&
            <div>
                <input autoFocus
                    onChange={this.onStatusChange}
                    onBlur={this.deactivateEditMode}
                    value={this.status} />
            </div>
        }
    </div>
    }
    
    
}

export default Status;