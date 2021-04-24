import React, { useState, useEffect }from 'react';

import styled from 'styled-components'
import { products_url as url} from '../utilities/LinksNservices';
import  PageHero from '../components/PageHero'


const MenClothing = () => {
const [jloading,setJLoading]=useState(true);
const [products,setJProducts]=useState([]);
// const [newProduct,setnewproduct]=useState([]);

   const FetchJProducts = async () => {
    setJLoading(false);
    try {
      const response = await fetch("http://fakestoreapi.com/products/category/men'sclothing")
      const products = await response.json()
      setJLoading(false);
      setJProducts(products);
      console.log(products);
     
    } catch (error) {
      setJLoading(false)
    }
  
    };
  useEffect(() => {
    FetchJProducts(url)
    
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
  
export default MenClothing;