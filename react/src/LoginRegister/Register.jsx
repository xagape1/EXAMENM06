import React, { useEffect } from 'react'
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Register = ({setLogin}) => {
  let [formulari, setFormulari] = useState({});
  let [error, setError] = useState("");
  let { idUser, setIdUser } = useContext(UserContext);
  let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    setFormulari({
      ...formulari,
      [e.target.name]: e.target.value
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    let { name, password, email } = formulari;
    try{
      
      const data = await fetch("http://localhost:3004/users", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        // Si els noms i les variables coincideix, podem simplificar
        body: JSON.stringify({ name, email, password })
      });
      const resposta = await data.json();
         setIdUser(resposta.id)
         console.log(idUser)
        
   
       
    }catch(err){
      console.log(err.message);
      alert("Catchch");
    };
  }
  
  return (
    <div className="center">
    <form>

      <div className="form-outline mb-4">
        <input name="name" type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={handleChange} />
        <label className="form-label" for="form3Example1cg">Your Name</label>
      </div>

      <div className="form-outline mb-4">
        <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={handleChange} />
        <label className="form-label" for="form3Example3cg">Your Email</label>
      </div>

      <div className="form-outline mb-4">
        <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={handleChange} />
        <label className="form-label" for="form3Example4cg">Password</label>
      </div>

      

      <div className="d-flex justify-content-center">
        <button type="button" 
          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={(e) => {
            handleRegister(e);
          }}>Register</button>
      </div>
     {error? (<div>{error}</div>):(<></>) }

      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
          onClick={() => {
            setLogin(true)
          }}
        >Login here</a></p>

    </form>

  </div>

  )
}

export default Register