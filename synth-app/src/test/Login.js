import React, {useState, useContext} from 'react';
import {LoginContext} from './Context';

function Login() {

    const {setUsername, setShowProfile} = useContext(LoginContext);

    return(
        <div>
            <input type="text" placeholder='Username...' onChange={(event) => {
                setUsername(event.target.value);
            }}/>

            <input type="text" placeholder='Password...' />
            <button onClick={ () => {
                setShowProfile(true);
                }}>

                LOGIN
            </button>

        </div>
    )

}

export default Login;