import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'

export default function TaskForm() {
  // estado que almacena el contenido de mis tareas
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  // metodo dispatch de redux 
  const dispatch = useDispatch()
  // metodo navigate de react router dom
  const navigate = useNavigate()

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
    navigate('/')
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
