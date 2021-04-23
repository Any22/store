import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../services/productsFetch'
import { single_product_url as url } from '../utilities/LinksNservices'
// import { formatPrice } from '../utils/helpers'
import Loading from '../components/Loading'
import Error from '../components/Errors'
import PageHero from '../components/PageHero'
import ProductImages from '../components/ProductImages'
import Stars from '../components/Stars'
import AddToCart from '../components/AddToCart'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
    
     const {id}=useParams();
     const history = useHistory();
     const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()
    useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        //   after this time it will automatically direct to home page using history
        history.push('/')
      }, 3000)
    }
    
  }, [error])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
 const {
     id:abc,
    title,
    price,
    description,
    category,
    image,
  } = product
  return<Wrapper>single product 
   <PageHero title={title} product />
   <h3 className="product-category">{category}</h3>
   
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
            <img src={image}/>
            <section className='content'>
            <h2>{title}</h2>
            <Stars />
            <h5>${price}</h5>
            <p className='desc'>{description}</p>
            <AddToCart/>
            </section>
        </div>
        </div>
  </Wrapper>
       
      

       
    

}
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .product-category{
      position: relative ;
      top:30px;
      margin:30px;
      text-transform: uppercase;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    text-align:justify;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage;