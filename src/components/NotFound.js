const NotFound = () => {
    return (
        <>
            <div style={gradientStyle}>These aren't the droids you're looking for...</div>
            <div style={imageContainerStyle}>
                <img src="assets/404.jpg" alt="404" />
            </div>
        </>
    );
}

const gradientStyle = {
    width: '100vw',
    height: '4rem',
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(21,21,21,1) 100%)',
    color: '#666',
    fontFamily: 'din-condensed, sans-serif',
    fontWeight: '400',
    fontSize: '1em',
    textAlign: 'center',
    paddingTop: '1rem'
};

const imageContainerStyle = {
    width: '100vw',
    height: 'calc(100vh - 8rem)',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(21,21,21,1)'
};

export default NotFound;
