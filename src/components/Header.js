import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <Link to='/'>
                <img
                    src="assets/sw-logo-stacked.png"
                    alt="Star Wars stacked logo"
                    style={logoStyle}
                ></img>
            </Link>
            <div style={{color: 'white'}}>search</div>
            {/* TODO: Search Input */}
        </header>
    );
};

const headerStyle = {
    backgroundImage: 'url(assets/stars-bg-top.jpg)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

const logoStyle = {
    width: 'auto',
    height: '2rem',
    cursor: 'pointer'
};

export default Header;