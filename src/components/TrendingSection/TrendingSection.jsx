import { Container, Row, Col } from 'react-bootstrap';
import './TrendingSection.scss';
import AppHeading from '../AppHeading/AppHeading';
import AppTag from '../AppTag/AppTag';

const TrendingSection = () => (
  <div className="TrendingSection">
    <Col xs={12} className=' d-flex justify-content-center'>
      <AppHeading title="Trending artists" />
    </Col>
    <Col xs={12} className=' d-flex justify-content-center tags mb-2'>
      <AppTag tag="Adam Beatard" />
      <AppTag tag="Charles Newman" />
      <AppTag tag="Jonah Smith" />
      <AppTag tag="Phil Manos" />
      <AppTag tag="Phil Manos" />
    </Col>
    <Col xs={12} className=' d-flex justify-content-center tags'>
      <AppTag tag="Adam Beatard" />
      <AppTag tag="Charles Newman" />
      <AppTag tag="Phil Manos" />
      <AppTag tag="Phil Manos" />
    </Col>
  </div>
);

export default TrendingSection;
