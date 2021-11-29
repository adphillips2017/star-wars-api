import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const submit = (e) => {
        e.preventDefault();

        if (!searchTerm) {
            return;
        }

        onSearch(searchTerm);
    }

    return (
        <header style={headerStyle}>
            <Link to='/'>
                <img
                    src="assets/sw-logo-stacked.png"
                    alt="Star Wars stacked logo"
                    style={logoStyle}
                ></img>
            </Link>
            <form style={searchContainer}>
              <input
                type="text" style={searchStyle} placeholder="Search term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
              <button type="submit" onClick={submit} style={searchButtonStyle}>Search</button>
            </form>
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

const searchContainer = {
  height: '100%',
  width: 'fitcontent',
  display: 'flex',
  flexDirection: 'row'
}

const searchStyle = {
    width: '15rem',
    borderRadius: '5px',
    border: '1px solid darkgray',
    backgroundColor: '#80808094',
    color: 'white',
    marginRight: '1rem'
};

const searchButtonStyle = {
  backgroundColor: 'rgb(255, 214, 9)',
  color: 'black',
  padding: '0.5rem 1rem',
  textAlign: 'center',
  borderRadius: '5px',
  cursor: 'pointer'
};

const logoStyle = {
    width: 'auto',
    height: '2rem',
    cursor: 'pointer'
};

export default Header;