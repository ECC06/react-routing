import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import ServiceDetails from '../pages/ServiceDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:id" element={<ServiceDetails />} />
    </Route>,
  ),
)

function Layout() {
  return (
    <div className="site">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>
      <main><Outlet /></main>
    </div>
  )
}

export default function Router() {
  return <RouterProvider router={router} />
}
