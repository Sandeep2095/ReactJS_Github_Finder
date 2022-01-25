import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card' style={DivStyle}>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};
const DivStyle = {
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '#404E4D',
  borderRadius: '20px',
  backgroundColor: '#eee'
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
