import React, { useState, useEffect } from 'react';
// import Comment from './Comment';
import PostComment from './PostComment';

function UserReviews(comment) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch ("https://afternoon-hollows-30320.herokuapp.com/comments")
            .then ((response) => response.json())
            .then ((comments) => setComments
              (comments));
            // console.log(comments)
    }, []);


    
    function addNewComment(comment) {
        setComments([...comments, comment])
    }

    return (
        <div>
            <PostComment addNewComment={addNewComment}/>
            <div>
                <div className="row">
                {/* <div className="card"  style={{width: 18 + 'rem'}}> */}
                <h1>User Reviews</h1>
                    {comments.map((comment) => (
                    <div className="comments"
                        key={comments.id}
                        username={comments.username}
                        comment={comments.comment}>
                    <li>username: {comment.username}</li>
                    <p>comment: {comment.comment}</p>
                   </div>))}
                </div>
                </div>
                </div>  
        // </div>
    )
}
export default UserReviews;