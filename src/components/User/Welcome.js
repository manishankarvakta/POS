import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Welcome = () => {
    const {user} = useFirebase();
    return (
        <div>
           <h2>Welcome! {user?.displayName}</h2>
           {
               user?.email && <p>Email: {user.email}</p> 

            }{

                user?.photoURL && <img src={user.photoURL}/>
            }
            
        </div>
    );
};

export default Welcome;