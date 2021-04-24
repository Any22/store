import React, { useState, useEffect }from 'react';
// import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import  PageHero from '../components/PageHero'

const Cart = () => {
const [cartloading,setCartLoading]=useState(true);
const [cartProducts,setCartProducts]=useState([]);
const FetchCartProducts = async (url) => {
    setCartLoading(false);
    try {
      const response = await fetch('https://fakestoreapi.com/carts/user/1')
      const cartProducts = await response.json()
      setCartLoading(false);
      setCartProducts(cartProducts);
      console.log(cartProducts);
     
    } catch (error) {
      setCartLoading(false)
    }
  
    };
  useEffect(() => {
    FetchCartProducts()

   
  }, [])



return(
    <div className="cart">
        <PageHero title='cartproduct' />
            <h2>Current Cart of user with ID = 1  </h2> 
            <div className="cart-main">
             {cartProducts.map((cartProduct)=>{
        //sorting the dates so the current cart of the user can be displayed        
               cartProducts.sort(function(a, b){return a.date - b.date});
       
           if (cartProduct.date === "2020-03-02T00:00:02.000Z")
           
             return <div>
                     <h3>User Id : {cartProduct.userId}</h3>
                     <h3>date : {cartProduct.date}</h3>
                    {cartProduct.products.map((product)=>{
                    return <section key={product.productId}>
                        <h3> Product id : {product.productId}</h3>
                    <h3> Product Quanity purchased : {product.quantity}</h3><br/>
                    </section>
             }
             )
            
             }
            
         </div>

        
         }
     )}




     </div>
     {/* <ProductImage productId={product.productId}/>  */}
     
</div>
);
}
export default Cart;