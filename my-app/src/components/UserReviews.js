import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function UserReviews() {

    const [userReviews, setUserReviews] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        comment: ''
    });

    useEffect(() => {
        fetch ("https://afternoon-hollows-30320.herokuapp.com/comments")
            .then ((response) => response.json())
            .then ((userReviews) => setUserReviews
              (userReviews));
            //   console.log(userReviews)
    }, []);

    let pageReviews = userReviews.map((userReview) => (
        <Comment key={userReview.id} username={userReview.username} comment={userReview.comment} />
   ));
    console.log(userReviews);

    function handleNewUserReview(e) {
        e.preventDefault();

        fetch("https://afternoon-hollows-30320.herokuapp.com/comments"),{
          method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: formData.username,
                comment: formData.comment
            }),
        }
         .then ((response) => response.json())
         .then((newReviewData) => {
                console.log(newReviewData)
         }); 
    }
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.username]: e.target.value,
        });
    }
    
    return (
        <>
            <form onSubmit={handleNewUserReview}>
                <input  type="text" id="username" name="username" placeholder="Enter Your Username" onChange={handleChange}/>
                <input  type="text" id="comment" name="comment" placeholder="Write Your Comment" onChange={handleChange}/>
                <input type="submit" id="submit" value="Post Review"/>
            </form>  
        <div>
            {pageReviews}
        </div>
        </>
    )
}
export default UserReviews;