import React from 'react';

const handleClick = value => () => console.log(value)


const List = (props) => {
  const { catgs } = props;
  if (!catgs || catgs.length === 0) return <p>No categories, sorry</p>;
  return (
      <div className="categories ">
        <h2 className=' subTitle'>Available Categories</h2>
        <cat>
        <ul>
            
             {catgs.map((catg) => {
             return (
            
             <li key={catg} className='list'>
             <button className='btn'>{catg} </button>
              </li>
         
         );
         })}
        </ul>
        </cat>
    </div>
  );
};
export default List;