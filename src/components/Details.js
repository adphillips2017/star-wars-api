const Details = ({ person }) => {
    return (
        <div style={ outterContainer }>
            <div style={ innerContainer }>
              <div style={header}><h1>{person.name}</h1></div>

              <div style={detailsContainer}>
                <div style={label}>Birth Year:</div>
                <div style={value}>{person.birth_year}</div>

                <div style={label}>Eye Color:</div>
                <div style={value}>{person.eye_color}</div>

                <div style={label}>Gender:</div>
                <div style={value}>{person.gender}</div>

                <div style={label}>Hair Color:</div>
                <div style={value}>{person.hair_color}</div>

                <div style={label}>Height:</div>
                <div style={value}>{person.height}</div>

                <div style={label}>Mass</div>
                <div style={value}>{person.mass}</div>

                <div style={label}>Skin Color:</div>
                <div style={value}>{person.skin_color}</div>
              </div>
            </div>
        </div>
    );
};

const outterContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    marginTop: '5rem'
};

const innerContainer = {
    minWidth: '30rem',
    maxWidth: '60%',
    borderRadius: '5px',
    border: '2px solid black'
};

const header = {
    backgroundColor: '#1f2125',
    color: 'white',
    textAlign: 'center'
}

const detailsContainer = {
    padding: '2rem'
};

const label = {
  textDecoration: 'underline'
};

const value = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  textTransform: 'uppercase'
};

export default Details;
