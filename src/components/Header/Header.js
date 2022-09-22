import './Header.css';
const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg';
function Header() {
    return (
        <div id='imdb-header'>
            <div id='logo'>
                <img id='logo-img'
                    src={logoUrl}
                    alt='IMDB Logo' />
            </div>
            <div id='title'>
                IMDB Clone
            </div>
            <div id='buttons'>
                <input type='button'
                    name="login"
                    value="Login"
                    id="login"
                    className='headerButtons' />
                <input type='button'
                    name="signup"
                    value="Signup"
                    id="signup"
                    className='headerButtons' />
            </div>
        </div>
    );
}

export default Header;