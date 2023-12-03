import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RegisterRoutesVehicles } from './pages/RegisterRoutesVehicles'

function App() {

  return (
    <div className='flex h-full w-full'>
      <RegisterRoutesVehicles/>
    </div>
  )
}

export default App
