import React from 'react';

const List = (props) => {
  const { catgs } = props;
  if (!catgs || catgs.length === 0) return <p>No categories, sorry</p>;
  return (
      <div className="row ">
        <ul>
            <h2 className=' subTitle'>Available Categories</h2>
             {catgs.map((catg) => {
             return (
            <div className="col-3">
             <li key={catg} className='list'>
            <span className='category-name'>{catg} </span>
             </li>
          </div>
         );
         })}
        </ul>
    </div>
  );
};
export default List;