import React from 'react'

const TodoList = ({ todo }) => {
   return (
      <>
         <td>{todo.userId}</td>
         <td>{todo.title}</td>
         {todo.completed ?
            <td>Pendent</td> : <td>Fet</td>}
         <td>{todo.id}</td>
      </>
   )
}

export default TodoList