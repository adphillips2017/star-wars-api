import PersonCardTray from './PersonCardTray';
import Pagination from './Pagination';

const SpeciesBrowser = ({ species, onSelect , onPageChange }) => {
    return (
        <div style={containerStyles}>
            <Pagination onPageChange={onPageChange} />

            { species.map((specie, index) => (
                <PersonCardTray key={index} cards={specie} onSelect={onSelect} />
            ))}

            <Pagination onPageChange={onPageChange} />
        </div>
    );
};

const containerStyles = {
    padding: ' 5rem 10% 10%'
};

export default SpeciesBrowser;
