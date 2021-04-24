import React, { useState, useEffect }from 'react';
// import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import  PageHero from '../components/PageHero'

const UserPage = () => {
const [loading,setLoading]=useState(true);
const [products,setProducts]=useState([]);
const FetchProducts = async (url) => {
    setLoading(false);
    try {
      const response = await fetch('https://fakestoreapi.com/users?limit=1')
      const products = await response.json()
      setLoading(false);
      setProducts(products);
      console.log(products);
     
    } catch (error) {
      setLoading(false)
    }
  
    };
  useEffect(() => {
    FetchProducts()

   
  }, [])



return(
    <div className="cart">
        <PageHero title='cartproduct' />
            <h2>User Information   </h2> 
            <div className="cart-main">
             {products.map((product)=>{
             return <div key={product.id} className="single-product">
                     <h3>User Id : {product.id}</h3><br/>
                     <h3>User Name : {product.username}</h3><br/>
                    <h3> First Name: {product.name.firstname}</h3><br/>
                    <h3>Last Name : {product.name.lastname}</h3><br/>
                    <p>Phone Number: {product.phone}</p>
                    <h3>Address : {product.address.city}</h3>
                    <h3> {product.address.street}</h3>
                    <h3> {product.address.number}</h3>
                    <h3> {product.address.zipcode}</h3>
                    </div>
             })}
         </div>
     </div>
     
);
}
export default UserPage;