import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'

export default function TaskForm() {
  // estado que almacena el contenido de mis tareas
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  // metodo dispatch de redux 
  const dispatch = useDispatch()

  // funcion para obtener datos del formulario
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }
  
 // funcion para enviar y guardar datos
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask(task))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder='title'
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder='description'
        onChange={handleChange}>
      </textarea>
      <button>Save</button>
    </form>
  )
}
