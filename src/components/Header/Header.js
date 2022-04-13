import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import RequireAuth from '../RuquireAuth/RequireAuth';
import logo from '../../Logo-tcm.png';

import './Header.css';

const Header = () => {
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);
    localStorage.setItem('user', JSON.stringify(user.uid));
    // console.log(user)
    return (
        <nav>
            {/* <Link to="/">Home</Link> */}
            <Link to="/pos">
                <img src={logo} width='150' alt="TCM"/>
            </Link>
            {/* <Link to="/about">About</Link> */}
            {
                user?.uid
                    ?
                    <>
                        {/* <Link to="/welcome">User</Link> */}
                        <button className='btn btn-dark align-right' onClick={()=> signOut(auth)}>Sign Out</button>
                    </>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        {/* <Link to="/register">Register</Link> */}
                    </>
            }

        </nav>
    );
};

export default Header;