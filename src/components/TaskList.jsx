import React from 'react'
import { useSelector } from 'react-redux'


export default function TaskList() {
  // obtengo los datos de mi estado global de redux 
  const stateTask = useSelector(state => state.tasks)

  return (
    <>
      {stateTask.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  )
}
