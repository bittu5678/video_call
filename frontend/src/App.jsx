import {Routes, Route, Navigate} from 'react-router-dom'
import Vc from './pages/vc';
import Register from './pages/register';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Navbar from './components/NavBar';
import { useContext } from 'react';
import { Authcontext } from './context/AuthContext';
import ContactUs from './pages/contact';
function App() {

    const {user} = useContext( Authcontext );
  return (
    <>
    <Navbar/>
    {/*<Sidebar/>
      <Notifications />*/}
    <Container className='text-secondary'>
    <Routes>
      <Route path="/" element={ user ? <Vc/>: <Login/>}/>
      <Route path="/Register" element={ user ? <Vc/>: <Register/>}/>
      <Route path="/Login" element={ user ? <Vc/>: <Login/>}/>
      <Route path="/*" element={<Navigate to="/" />}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
    </Routes>
    </Container>
 </>
  )
}

export default App
