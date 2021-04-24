import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../services/addingCart'
import AmountButtons from '../components/AmountButtons'

const AddToCart = ({product}) => {
  
    const{id,title,price,stock,image}=product;
    const colors=[
      "#ff0000",
      "#00ff00",
      "#0000ff"]
    const [mainColor, setMainColor] = useState(colors[0])
    const [amount,setAmount]=useState(1);
    // const { addToCart } = useCartContext()
    
    
    const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

    return (
        <Wrapper className="main">
          <div className='colors'>
        <span>colors :</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}>
                {mainColor === color ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
            <br/>
            <h4>Quantity</h4>
            <div className='btn-container'>
              <AmountButtons increase={increase} decrease={decrease} amount={amount}/>
            {/* <Link to='/cart' className='btn'  onClick={() => addToCart(id,title,amount,image, price)}>
                 Add to cart
            </Link> */}
            </div>
            
        </Wrapper>
    )   
}
 const Wrapper=styled.main`
 color:black ;

 `

export default AddToCart