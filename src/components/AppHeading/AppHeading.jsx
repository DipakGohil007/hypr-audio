import Search from '../../svg/Search';
import './AppHeading.scss'

function AppHeading(props) {
    return (
        <>
            <h2 className='app-heading'>{props.title}</h2>
        </>
    );
}

export default AppHeading;