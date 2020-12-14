import Comments from './CommentsComponent';
import {addCommentActionCreator} from './../../redux/commentReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        commentsData: state.comments.commentsData,
        newCommentText: state.comments.newCommentText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: (newCommentText) => {
            dispatch(addCommentActionCreator(newCommentText));
        }
    }
}

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;
