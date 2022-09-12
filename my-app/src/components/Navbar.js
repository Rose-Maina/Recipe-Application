import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
      <div className="navbar">
        <ul>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSEo__EXpP_zd581Ds_X9HwwbXg_fRPIo6A&usqp=CAU" alt="logo" /></li>      
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/UserReviews">UserReviews</Link> </li>                                                                                                                       
            <li><Link className="nav-link" to="/Signup">Signup</Link> </li>
        </ul>
      </div>
      </>
    );
};


export default Navbar;