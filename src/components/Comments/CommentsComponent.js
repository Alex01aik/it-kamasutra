import React from 'react';
import CommentForm from './CommentForm';
import { reduxForm } from 'redux-form';

const Comments = (props) => {
      
const CommentItem = (props) => {

    return (
        <div>
            <p>
                <span>{props.id}</span>
                {props.text}
            </p>
        </div>
    )

}

let addNewComment = (values) => {
    props.addComment(values.newCommentText);
}
    return(
        <div>
            <AddCommentREduxForm onSubmit={addNewComment} newCommentText={props.newCommentText}/>
            {
            props.commentsData.map((comment, index) => 
                    <CommentItem
                        key={index}
                        id={comment.id}
                        text={comment.text}
                    />
                )
            }
        </div>
    )
}

const AddCommentREduxForm = reduxForm({form: "commentAddForm"})(CommentForm);

export default Comments;