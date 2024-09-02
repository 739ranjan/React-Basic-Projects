import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import BgChanger from './components/BgChanger';
import Calculator from './components/Calculator';
import Timer from './components/Timer';
import List from './components/list/List.jsx';


const router = createBrowserRouter([
  {path: '/', element:<App />, children:[
    {path: '/', element:<Welcome />},
    {path: '/counter', element: <Counter />},
    {path: '/clock', element: <Clock />},
    {path: '/bgchanger', element: <BgChanger />},
    {path: '/calculator', element: <Calculator />},
    {path: '/timer', element: <Timer />},
    {path: '/list', element: <List />},
  ]}
])


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
