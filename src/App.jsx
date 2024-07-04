import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskList />
  }, {
    path: '/create-task',
    element: <TaskForm />
  }
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
