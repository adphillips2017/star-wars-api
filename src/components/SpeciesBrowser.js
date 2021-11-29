import PersonCardTray from './PersonCardTray';

const SpeciesBrowser = ({ species, onSelect }) => {
    return (
        <div style={containerStyles}>
            {/* TODO: <Pagination /> */}
            { species.map((specie, index) => (
                <PersonCardTray key={index} cards={specie} onSelect={onSelect} />
            ))}
            {/* TODO: <Pagination /> */}
        </div>
    );
};

const containerStyles = {
    padding: '10%'
};

export default SpeciesBrowser;
