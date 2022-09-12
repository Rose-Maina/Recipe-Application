import React from 'react';

function Comments(props){

    
    return(
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th className="th1">User Review</th>
                </tr>
                <tr>
                    <td className="td1">{props.username}</td>
                    <td className="td2">{props.comment}</td>
                   <button id="delete" onClick={handleDeleteClick}>DELETE COMMENT</button>

                </tr>
                </table>
        </div>
    
    )
}
export default Comments;