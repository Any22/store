import React, { useContext, useEffect, useReducer } from 'react';

import reducer from '../reducers/products_reducer'
import { products_url } from '../utilities/LinksNservices';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen :true,
}

const ProductsContext = React.createContext()
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar=()=>{
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar=()=>{
    dispatch({ type:SIDEBAR_CLOSE})
  }
  // useEffect(() => {
  //   // fetchProducts(url)
  //   openSidebar();
  // }, [])
return (
    <ProductsContext.Provider
      value={{...state,openSidebar,closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
//   const fetchProducts = async () =>{
    
//     try {
//       const response = await fetch(products_url);
//       const products= await response.json();
//       console.log(products);
      
      
//     } catch (error) {
     
//       console.log(error);
//     }
// }