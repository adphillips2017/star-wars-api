import PersonCard from './PersonCard';

const PersonCardTray = ({ cards, onSelect }) => {
    return (
        <>
            <div style={headerStyles}>{cards.name}</div>
            <div className="card-tray" style={cardTrayStyles}>
                { cards.people.map((url, index) => (
                    <PersonCard key={index} url={url} onSelect={onSelect} />
                ))}
            </div>
        </>
    );
};

const headerStyles = {
    textTransform: 'uppercase',
    borderBottom: '3px solid black',
    marginBottom: '2rem',
    width: '100%',
    fontSize: '1.75rem',
    color: 'black'
}

const cardTrayStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '4rem',
    gap: '3rem'
};

export default PersonCardTray;