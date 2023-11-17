import React from 'react';
import './Dropdown.css'

const Dropdown = () => {
  return (
    <div className='dropdown'>
      <div className="dropdown-content">
        <ul>
          <li >Hard flag</li>
          <li>Temp flag</li>
          <li>Restricted unflag</li>
          <li>Un flag</li>
          <li>Reviewed</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
