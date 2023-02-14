import { useState } from 'react'
import React from 'react'
import Login from './Login'
import Register from './Register'
import { useContext } from 'react'
import { UserContext } from "../UserContext";



const LoginRegister = () => {
    let [login, setLogin] = useState(true);

    return (
      <div>
        {login ? 
            <Login setLogin={setLogin}/>
          : 
            <Register setLogin={setLogin}/>        
        }
      </div>
    );
}

export default LoginRegister
