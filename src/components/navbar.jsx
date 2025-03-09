import { Button, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
    const total = 25000;
    const token = false;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
            <Navbar.Brand className="ms-3">Pizzería Mamma Mía</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Button variant="outline-light" className="me-2">🍕 Home</Button>
                    {token ? (
                        <>
                            <Button variant="outline-light" className="me-2">🔓 Profile</Button>
                            <Button variant="outline-light" className="me-2">🔒 Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline-light" className="me-2">🔐 Login</Button>
                            <Button variant="outline-light" className="me-2">🔐 Register</Button>
                        </>
                    )}
                    <Button variant="outline-info" className="me-2">🛒 Total: ${total.toLocaleString()}</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
