import { RouterProvider } from 'react-router-dom'
import './App.css'
import { ModeToggle } from './components/ui/mode-toggle'
import { router } from './router/Router'

function App() {

  return (
    <div className='flex h-full w-full'>
      <RouterProvider router={router}/>
      <ModeToggle/>
    </div>
  )
}

export default App
