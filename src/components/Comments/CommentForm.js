import React from 'react';
import { Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import {Textarea} from '../common/FormsControls';

let maxLenth10 = maxLengthCreator(10);

const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newCommentText"
                component={Textarea}
                validate={[required, maxLenth10]}
                />
            <button>
                ADD
            </button>
        </form>
    )
}

export default CommentForm;