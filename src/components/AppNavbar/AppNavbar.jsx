import { Container, Col } from 'react-bootstrap';
import './AppNavbar.scss'
import Logo from '../../svg/Logo';
import Cart from '../../svg/Cart';

function AppNavbar() {
    return (
        <nav>
            <Container fluid className='d-flex justify-content-between'>
                <Col className='d-flex justify-content-between align-items-center py-4'>
                    <Logo />
                    <Cart />
                </Col>
            </Container>
        </nav>
    );
}

export default AppNavbar;