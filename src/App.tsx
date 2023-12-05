import './App.css'
import { ModeToggle } from './components/ui/mode-toggle'
import { RegisterRoutesVehicles } from './pages/RegisterRoutesVehicles'

function App() {

  return (
    <div className='flex h-full w-full'>
      <RegisterRoutesVehicles/>
      <ModeToggle/>
    </div>
  )
}

export default App
