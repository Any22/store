import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Filters from '../components/Filters' 
import { products_url as url} from '../utilities/LinksNservices';
import SingleProductPage from './SingleProductPage';
import ProductList from '../components/ProductList' 

import  PageHero from '../components/PageHero'


const ProductsPage = () => {
const [loading,setLoading]=useState(true);
const [products,setProducts]=useState([]);
// const [menproducts,setmenProducts] = useState([]);
// const [womenproducts,setwomenProducts] = useState([]);
// const[elproducts,setEProducts] = useState([]);
// const [jewlproducts,setJProducts] = useState([]);

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
  
  }, [])
      {return <main>
        <PageHero title='product' />
        <Wrapper className='section'>
         
          {products.map((product) => {
      
          return (
              <div key={product.id} className="single-product">
              <br/>
              <img src={product.image} alt={product.title}/>
              <h4>{product.title}</h4>
                  <footer>
                      <div className="product-info">
                        <h5>${product.price}</h5>
                      </div>
                  </footer>  
                  </div>
           )
        })}
  
      </Wrapper>
    </main>}
      
 
  
  }
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px 20px;
  padding: 10px;
  margin:20px;
  }
.single-product{
  marging-top:40px;
    border:grey solid 2px;
    border-radius:30px;
    padding:10px;
    text-align:center;  
}
img{   
    height:280px;
    width:220px; 
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
    
    }
    h5{
      position :relative ;
      color:black;
      margin-top:20px;
  
     
    }
     @media (min-width: 360px) {
    .section {
      display:grid;
      grid-template-columns:auto; 
    }
}
`
export default ProductsPage
