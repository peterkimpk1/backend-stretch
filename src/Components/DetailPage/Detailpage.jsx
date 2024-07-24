import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const Detailpage = ( { brandFoods, getFilteredFood} ) => { 
  const id = useParams();
  const singleFood = getFilteredFood(id.id)
  const {fdc_id, brand_name, ingredients, serving_size} = singleFood
  console.log('singleFood', singleFood)
  //returned undefined 
  
  return (
    <div>
      <h2>Detailpage</h2>
      <Link to='/' className='homeBttn'>Home</Link>
      <div>
        <p>{fdc_id}</p>
        <p>{brand_name}</p>
        <p>{ingredients}</p>
        <p>{serving_size}</p>
      </div>
    </div>
   
  )
}

export default Detailpage