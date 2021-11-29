const Pagination = ({ onPageChange }) => {
  return (
    <div style={ containerStyles }>
      <div style={ buttonStyles } onClick={() => onPageChange('prev')}>Prev</div>
      <div style={ buttonStyles } onClick={() => onPageChange('next')}>Next</div>
    </div>
  );
};

const containerStyles = {
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
};

const buttonStyles = {
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  textAlign: 'center',
  backgroundColor: '#ffd609',
  color: 'black',
  borderRadius: '5px',
  fontSize: '.75rem',
  boxShadow: 'black 0px 6px 11px -3px'
}

export default Pagination;
