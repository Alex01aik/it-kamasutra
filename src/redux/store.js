import commentReducer from "./commentReducer";

let store = {
    _state: {
        comments: {
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
            ],
            newCommentText: "default-text",
    
        },
        orders: {
            orderData: []
        }     
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        commentReducer(this._state.comments, action);
        this._callSubscriber(this._state);
    }
}

export default store;