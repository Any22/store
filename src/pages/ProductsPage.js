import React, { useState, useEffect }from 'react';
import styled from 'styled-components'
// import { SET_LISTVIEW } from '../actions';
import {Link} from 'react-router-dom'
import { products_url as url} from '../utilities/LinksNservices';
import SingleProductPage from './SingleProductPage';
const ProductsPage = () => {
const [loading,setLoading]=useState(true);
  const [products,setProducts]=useState([]);

    const FetchProducts = async (url) => {
    setLoading(false);
    try {
      const response = await fetch(url)
      const products = await response.json()
      setLoading(false);
      setProducts(products);
      console.log(products);
     
    } catch (error) {
      setLoading(false)
    }
  
    };
  useEffect(() => {
    FetchProducts(url)
    // openSidebar();
  }, [])

  
  return(
      <Wrapper className='section'>
    {products.map((product) => {
    return (
    <div key={product.id} className="single-product">
        {/* <h5>{product.category}</h5> */}
        <img src={product.image} alt={product.title}/>
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        
    
    <footer>
        <div className="product-info">
          <h4>{product.price}</h4>
          {/* <Link to={`/products/${product.id}`} className='link'  children={<SingleProductPage key={product.id}/>}>
              View
            </Link> */}
        
        </div>
    </footer>  
    </div>
    
    );
         }
         )}
      </Wrapper>
     );
    }
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px 20px;
  padding: 10px;
  margin:20px;
  }
.single-product{
    padding:10px;
    text-align:justified;  
}
img{   
    height:280px;
    width:220px;   
    }
     @media (min-width: 360px) {
    .section {
      display:grid;
      grid-template-columns:auto; 
    }
}



`

 export default ProductsPage