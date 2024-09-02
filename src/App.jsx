import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="app-container flex">
      <Sidebar />
      <Outlet />
    </div>
      
    </>
  )
}

export default App
