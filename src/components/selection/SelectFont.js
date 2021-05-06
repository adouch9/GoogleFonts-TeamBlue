import React from 'react';

//Création components SelectFont

const SelectFont = ({ handleSelectChange }) => {
  return (
    <select
      id='sort'
      className='form-select mb-4'
      onChange={handleSelectChange}
    >
      <option value='date'>Les plus récentes</option>
      <option value='popularity'>Les plus populaires</option>
      <option value='trending'>Top 10 trending</option>
    </select>
  );
};

export default SelectFont;
