import './Header.css';
import { appName, logoUrl, login, signup } from '../../helpers/constants';
function Header() {
    return (
        <div id='imdb-header'>
            <div id='logo'>
                <img id='logo-img'
                    src={logoUrl}
                    alt='IMDB Logo' />
            </div>
            <div id='title'>
                {appName}
            </div>
            <div id='buttons'>
                <input type='button'
                    name="login"
                    value={login}
                    id="login"
                    className='headerButtons' />
                <input type='button'
                    name="signup"
                    value={signup}
                    id="signup"
                    className='headerButtons' />
            </div>
        </div>
    );
}

export default Header;