import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Authcontext } from "../context/AuthContext";
const NavBar = () => {

        const {user, logoutUser} = useContext(Authcontext);

    return ( <>
    <Navbar bg="dark" className="mb-4" style={{ height:"3.75rem"}}>
        <Container>
            <h2>
                {/*here we can also add the company logo as image*/}
                <Link to="/" className="link-light text-decoration-none">
                Video Call App
                </Link>
            </h2>
            <span className="text-warning">Logged in as {user?.name}</span>
            <Nav>
                <Stack direction="horizontal" gap={4}>

                {
                    user && (<>
                    <Link onClick={()=>logoutUser()} to="/Login" className="link-light text-decoration-none">
                      Logout
                </Link>
                    </>)
                }    
                 {
                    !user && (<>
                                <Link to={"./Login"} style={{color:"skyblue", textDecoration:"none"}}>Login</Link>
                                <Link to={"./Register"} style={{color:"cyan", textDecoration:"none"}}>Register</Link>
                    </>)
                }
                <Link to="/ContactUs" style={{color:"cyan", textDecoration:"none"}}>Contact Us</Link>
                </Stack>
            </Nav>
        </Container>
    </Navbar>
    </> );
}
 
export default NavBar;