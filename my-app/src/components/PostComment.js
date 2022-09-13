import React, { useState } from 'react';

function PostComment({addNewComment}) {

    const [comments, setComments] = useState({
        username: "",
        comment: "",
    });

    const handleChange = event => {
        setComments({
            ...comments,
            [event.target.username]: event.target.value
        });
    }

function handleSubmit(event){
    const commentObj = {
        username: comments.username,
        comment: comments.comment
    }
    event.preventDefault()
    fetch("https://afternoon-hollows-30320.herokuapp.com/comments",{
        method:"POST",
        headers:
        {
            "Content-Type":"application/json"
        }, body: JSON.stringify(commentObj)
    })
    .then((response) => response.json())
    .then ((comment)=> {
        console.log(comment)
        addNewComment(comment)
    })
    setComments({
        username: " ",
        comment: " "
    })
}  
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  type="text"  value={comments.username} name="username" placeholder="Enter Your Username" onChange={handleChange}/>
                <input  type="text"  value={comments.comment} name="comment" placeholder="Write Your Comment" onChange={handleChange}/>
                <input type="submit" value="Post Review"/>
            </form>  
        </>
    )
}
export default PostComment;
