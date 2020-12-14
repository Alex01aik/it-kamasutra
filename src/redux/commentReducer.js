const ADD_COMMENT = 'ADD_COMMENT';
const CHANGE_NEW_COMMENT = 'CHANGE_NEW_COMMENT';

let initialState = {
    commentsData: [
        {
            id: 1,
            text: "I'm first!!!"
        },
        {
            id: 2,
            text: "Hi, my name is Alex)"
        },
        {
            id: 3,
            text: "There are so cool!"
        },
    ]
}

const commentReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COMMENT:{
            let newComment ={
                id: state.commentsData.length + 1,
                text: action.newCommentText
            }
            let stateCopy = {...state};
            stateCopy.commentsData = [...state.commentsData];
            stateCopy.commentsData.push(newComment);
            return stateCopy;
        }
        // case CHANGE_NEW_COMMENT:{
        //     let stateCopy = {...state};

        //     stateCopy.newCommentText = action.newText;
        //     return stateCopy;
        // }
        default:
            return state;
    }
}


export const addCommentActionCreator = (newCommentText) =>
    ({type: ADD_COMMENT, newCommentText})

export default commentReducer;