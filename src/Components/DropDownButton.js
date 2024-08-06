import React from 'react';
import './css/DropDownButton.css';

const SelectList = () => {
  return (
    <div style={{ paddingRight: '20px' }}>
      <div className='form-group '>
        <select id='select_list_wrapper'>
          <option>Weekly</option>
          <option>Daily</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
    </div>
  );
};

export default SelectList;
