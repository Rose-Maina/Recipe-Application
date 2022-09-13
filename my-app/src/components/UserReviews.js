import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function UserReviews() {

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        username: "",
        comment: ""
    });

    useEffect(() => {
        fetch ("https://afternoon-hollows-30320.herokuapp.com/comments")
            .then ((response) => response.json())
            .then ((users) => setUsers
              (users));
            //   console.log(userReviews)
    }, []);

    let pageReviews = users.map((user) => (
        <Comment username={user.username} comment={user.comment} />
   ));
    console.log(users);

    function handleSubmit(e) {
        e.preventDefault();

        // const userData = { 
        //     username:formData.username,
        //     comment:formData.comment
        // };
        fetch("https://afternoon-hollows-30320.herokuapp.com/comments",
        {
          method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: formData.username,
                comment: formData.comment
            })
        })
         .then ((response) => response.json())
         .then((newReviewData) => {
                console.log(newReviewData)
         }) 
         .catch((err) => {
            console.log(err.message);
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
            <form onSubmit={handleSubmit}>
                <input  type="text"  name="username" placeholder="Enter Your Username" onChange={handleChange}/>
                <input  type="text"  name="comment" placeholder="Write Your Comment" onChange={handleChange}/>
                <input type="submit" value="Post Review"/>
            </form>  
        <div>
            {pageReviews}
        </div>
        </>
    )
}
export default UserReviews;