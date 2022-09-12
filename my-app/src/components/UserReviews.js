import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function UserReviews() {

    const [userReviews, setUserReviews] = useState([]);
    const [formData, setFormData] = useState({
        username: "",
        comment: "",
        timestamps: ""
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

    function handleSubmit(e) {
        e.preventDefault();

        const userData = { 
            username:formData.username,
            comment:formData.comment,
            timestamps:formData.timestamps
        };
        fetch("https://afternoon-hollows-30320.herokuapp.com/comments",
        {
          method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
         .then ((response) => response.json())
         .then((newReviewData) => {
                console.log(newReviewData)
         }) 
    }
    // const handleChange = e => {
    //     setFormData({
    //         ...formData,
    //         [e.target.username]: e.target.value,
    //     });
    // }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  type="text" id="username" value={formData.username} name="username" placeholder="Enter Your Username" onChange={(e)=>setFormData(e.target.value)}/>
                <input  type="text" id="comment" value={formData.comment} name="comment" placeholder="Write Your Comment" onChange={(e)=>setFormData(e.target.value)}/>
                <input type="submit" id="submit" value="Post Review"/>
            </form>  
        <div>
            {pageReviews}
        </div>
        </>
    )
}
export default UserReviews;