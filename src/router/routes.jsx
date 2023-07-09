import App from '@/App'
import Login from '@pages/Login/Login'
import Home from '@pages/Home/Home'

const routes = [
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/home', element: <Home /> },
]

export default routes
