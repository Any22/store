import React from 'react'
import styled from 'styled-components';
import store from '../images/store.jpg'
import {Link} from 'react-router-dom';
import { links } from '../utilities/LinksNservices';
import { FaBars } from 'react-icons/fa'
import CartBtn from './CartBtn';
import { useProductsContext } from '../services/productsFetch';
// import { Cart } from '../pages';
const Navbar = () => {
  const {openSidebar}=useProductsContext();
    return (
        <NavContainer>
         <div className="nav-center">
            <div className='nav-header'>
              <Link to ='/'>
              <img src={store} alt="fake-store"/>
              </Link>
                <button type='button' className='nav-toggle' onClick={openSidebar} >
                <FaBars />
                </button>
            </div>
            <ul className='nav-links'>
              {links.map((link) => {
                const { id, text, url } = link
                return (
                <li key={id}>
                    <Link to={url}>{text}</Link>
                </li>
                 )
              })}
                {/* {myUser && (
                    <li>
                    <Link to='/checkout'>checkout</Link>
                    </li>
                )} */}
            </ul>
              <CartBtn/>
          </div>
 

        </NavContainer>
    )
}
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
 
 .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 70px;
      margin-left: -10px;
    }
    
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-blue-1);
    cursor: pointer;
    }
    .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

   @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content:left;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-1);
        font-size: 1rem;
        font-weight:bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
         display: grid;
      }
 }
`

export default Navbar;