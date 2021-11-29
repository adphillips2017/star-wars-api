const Details = ({ person }) => {
    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.birth_year}</p>
        </div>
    );
};

export default Details;
