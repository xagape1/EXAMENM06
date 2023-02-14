import React from 'react'
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Todos = () => {
  let { idUser, setIdUser } = useContext(UserContext);
  const { id } = useParams();
  let [loading, setLoading] = useState(true);
  let [todo, setTodo] = useState([])
  let navigate = useNavigate();

  const getTodos = async () => {
    try {
      console.log(id)
      const data = await fetch(("http://localhost:3004/todos/" + id), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const resposta = await data.json();
        console.log(resposta)
        setLoading(false);
        setTodo(resposta)
    } catch (err) {
      console.log(err.message);
      alert("Catchch");
    };

  }
  useEffect(() => {
    getTodos();
  }, []);
  
  const deleteTodo = async (id) => {
    try {
    const data = await fetch("http://localhost:3004/todos/" + id, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const resposta = await data.json();
      console.log(resposta)
      console.log("todo eliminado")
      navigate("/todoslist")
    
  } catch(err) {
    console.log(err.message);
    alert("Catchch");
  };
}

  return (
    <>
    {loading ?
      "cargando..."
      :
      <>
        <div class="card">
          <div class="card-header">
            <table class="table">
              <tbody>
                <tr>
                  <td>userId</td>
                  <td>{todo.userId}</td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>{todo.title}</td>
                </tr>
                <tr>
                  <td>completed</td>
                  {todo.completed?
    <td>si</td>:<td>no</td>}                </tr>
               
               <tr>
                  <td>id</td>
                  <td>{todo.id}</td>
                </tr>

              </tbody>
            </table>
            {console.log(idUser)}

            {console.log(todo.userId)}
              {idUser == todo.userId ?
                  <>
                      <button onClick={(e) => {navigate("/todos/edit/"+todo.id)}}>📝</button> 
                      <button onClick={(e) => {deleteTodo(todo.id)}}>🗑️</button>
                  </>
                  : <></>}    
                
          </div>

        </div>
      </>

    }
  </>
  )
}

export default Todos