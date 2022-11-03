import React,{useContext, useEffect, useState} from 'react'
import { CartContext } from '../../store/cart-context'
import CartIcon from '../Carts/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnIsHighted, setBtnIsHighted]=useState(false)
  const cartCtx = useContext(CartContext);
 const {items} = cartCtx
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber +item.amount;
  }, 0)
// cartCtx = {addItemToCarthabdler,removeItemToCarthabdler} 
const btnClasses = `${classes.button} ${btnIsHighted?
  classes.bump : ''} `

useEffect(()=>{
  if(cartCtx.items.length === 0){
    return;
  }
setBtnIsHighted(true);

const timer = setTimeout(()=>{
  setBtnIsHighted(false)
}, 300);

return()=>{
  clearTimeout(timer)
}

}, [items])
  return (
    <button className={btnClasses} onClick={props.onShowModal}>
        <span className={classes.icon}>
           <CartIcon/> 
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton