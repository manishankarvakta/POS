import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'
import './Header.css';

const Header = () => {
    const { user, handelSignOut } = useFirebase();
    console.log(user)
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {
                user?.uid
                    ?
                    <>
                        <Link to="/welcome">User</Link>
                        <button onClick={handelSignOut}>Sign Out</button>
                    </>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
            }

        </nav>
    );
};

export default Header;