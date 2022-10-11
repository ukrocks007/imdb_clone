import './Header.css';
import { appName, logoUrl, login, signup, logout } from '../../helpers/constants';
function Header(props) {
    return (
        <div id='imdb-header'>
            <div id='logo'>
                <img id='logo-img'
                    src={ logoUrl }
                    alt='IMDB Logo' />
            </div>
            <div id='title'>
                { appName }
            </div>
            { props.isLoggedIn ? (<div id='buttons'>
                <input type='button'
                    name="logout"
                    value={ logout }
                    id="logout"
                    className='headerButtons' /></div>) : (<div id='buttons'>
                        <input type='button'
                            name="login"
                            value={ login }
                            id="login"
                            className='headerButtons' />
                        <input type='button'
                            name="signup"
                            value={ signup }
                            id="signup"
                            className='headerButtons' />
                    </div>) }
        </div>
    );
}

export default Header;