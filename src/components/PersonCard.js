import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PersonCard = ({ url, onSelect }) => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        const getPerson = async () => {
            const response = await fetch(url);
            const data = await response.json();

            setPerson(data);
            console.log(`getPerson`, data);
        };

        getPerson();
    }, []);

    return (
        <Link to={`/details`} style={{ textDecoration: 'none' }} onClick={() => onSelect(person) }>
            <div style={cardStyles} className="card-hover">
                <div style={headerStyles}>
                    <div style={fieldStyles}>{person.name ? person.name : 'Loading..' }</div>
                </div>

                <div style={bodyStyles}>
                    Details
                </div>
            </div>
        </Link>
    );
};

const cardStyles = {
    width: '10rem',
    height: '10rem',
    marginBottom: '1.5rem',
    borderRadius: '5px',
    boxShadow: 'black 0px 20px 30px -10px',
    cursor: 'pointer',
    backgroundColor: '#1f2125',
    color: '#fff',
    transition: 'all .5s ease-in-out'
};

const bodyStyles = {
    color: '#1f2125',
    padding: '2rem'
};

const headerStyles = {
    backgroundColor: '#1f2125',
    color: '#fff',
    padding: '1rem',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
};

const labelStyles = {
    fontSize: '0.8rem',
    marginBottom: '0.5rem'
};

const fieldStyles = {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
};

export default PersonCard;