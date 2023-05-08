import Search from '../../svg/Search';
import './AppSearch.scss'

function AppSearch() {
    return (
        <>
            <div className="search">
                <input type="text" name="search" id="search" placeholder='Search with a youtube link' />
                <Search />
            </div>
        </>
    );
}

export default AppSearch;