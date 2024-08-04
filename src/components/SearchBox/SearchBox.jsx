import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
