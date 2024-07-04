import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'


export default function TaskList() {
  // obtengo los datos de mi estado global de redux 
  const stateTask = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <>
      <h2>Mi lista de tareas</h2>
      <Link to={'/create-task'}>Crear tarea</Link>
      {stateTask.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleClick(task.id)}>Delete task</button>
        </div>
      ))}
    </>
  )
}
