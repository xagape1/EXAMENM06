import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { UserContext } from "./UserContext";
import { Routes, Route } from "react";
import LoginRegister from './LoginRegister/LoginRegister'
import TodosList from './TodoList'

function App() {
  let [idUser, setIdUser] = useState("");
  return (
    <>
      <UserContext.Provider value={{ idUser, setIdUser }}>
        {idUser ?
          <>

            <Routes>
              <Route path="/todoslist" element={<TodosList />} />

            </Routes></>

          :
          <LoginRegister />}
      </UserContext.Provider>
    </>
  )
}

export default App
