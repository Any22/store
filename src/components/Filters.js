import React from 'react'

 const Filters = ({products}) => {
     products.map((product) => {
      return (
    <select>
    <option  key={product.id}  value={product.category}>{product.category} </option> 
    </select>
      );
    
      })}

 export default Filters
