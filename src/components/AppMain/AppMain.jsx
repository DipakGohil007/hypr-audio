import { Container, Row, Col } from 'react-bootstrap';
import './AppMain.scss'
import Heading from '../../svg/Heading';
import AppSearch from '../AppSearch/AppSearch';
import TrendingSection from '../TrendingSection/TrendingSection';


function AppMain() {
    return (
        <main>
            <Container>
                <Row>
                    <Col xs={12} className=' d-flex justify-content-center heading'>
                        <Heading />
                    </Col>
                    <Col xs={12} className=' d-flex justify-content-center'>
                        <p className='main-desc'>Uncover hidden gold for you next project from 1000+ artists</p>
                    </Col>
                    <Col xs={12} className=' d-flex justify-content-center'>
                        <AppSearch />
                    </Col>
                    <TrendingSection />

                </Row>
            </Container>
        </main>
    );
}

export default AppMain;