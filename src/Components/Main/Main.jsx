import React, { useState } from 'react';
import './Main.css';


const Main = ({ data, columns }) => {
  const [sorting, setSorting] = useState({
    column: null,
    order: 'asc',
  });


  const handleSort = (column) => {
    setSorting((prevSorting) => ({
      column,
      order: prevSorting.column === column && prevSorting.order === 'asc' ? 'desc' : 'asc',
    }));
  };


  const sortedData = [...data].sort((a, b) => {
    const column = sorting.column;

    if (column !== null) {
      if (column === 'dateAddedOn' || column === 'inQueueFor') {

        const aValue = new Date(a[column]);
        const bValue = new Date(b[column]);

        if (aValue < bValue) return sorting.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return sorting.order === 'asc' ? 1 : -1;
      } else {

        const aValue =
          typeof a[column] === 'object' ? Object.values(a[column])[0] : a[column];
        const bValue =
          typeof b[column] === 'object' ? Object.values(b[column])[0] : b[column];

        if (aValue < bValue) return sorting.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return sorting.order === 'asc' ? 1 : -1;
      }
    }

    return 0;
  });



  return (
    <div className='main'>
      <div className="filters">
        <input className='search' style={{font:"Inter",width:"300px", height:"25px" , borderRadius:"9px" ,padding:"6px 10px", borderColor:"#E4E4E4"}} type='text' placeholder='Search'/>
      </div>
      <div className='table'>
        <table className='your-table'>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  onClick={() => handleSort(column.field)}
                  className={sorting.column === column.field ? 'sorted' : ''}
                >
                  {column.label}
                  {sorting.column === column.field && (
                    <span
                      className={`arrow ${sorting.order === 'asc' ? 'asc' : 'desc'}`}
                    ></span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} style={{ width: column.width }}>
                    {typeof row[column.field] === 'object' ? (
                      <div className='row'>
                        {Object.values(row[column.field]).map((value, innerIndex) => (
                          <div className='row-data' key={innerIndex} style={{ fontWeight: innerIndex === 0 ? 'bold' : 'normal' }}>
                            {value}
                          </div>
                        ))}
                      </div>
                    ) : (
                      row[column.field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
