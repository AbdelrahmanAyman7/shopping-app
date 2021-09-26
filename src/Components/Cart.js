import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from './redux/actions/productActions'

const Cart = () => {

  const [quantity, setQuantity] = useState(1)
  const incrementQty = () => {
    setQuantity(quantity + 1)
  }
  const decrementQty = () => {
    if (quantity > 1){
      setQuantity(quantity - 1);
    }
    else {
      setQuantity(1)
    }
  }
  const cartItem = useSelector((state) => state.shop.cart)
  const myDispatch = useDispatch()
  const removeItem = (index) => {
    myDispatch(removeFromCart(index))
  }
  return (
    <Fragment>
    { cartItem.map((item,index) => (
       

    <div className ="mainContainer col-12" key = {item.id}>
    <div className ="cart col-9" id = "cartDetail">
    <div className ="container-fluid">
    <div className ="cartWrapper">
     <div className ="cartPreview col-md-6">       
      <div className ="cartPreview-pic tab-content">
       <div className ="tab-pane active" id="pic-1"><img src = {item.image} alt = {item.title} /></div>              
      </div>          
     </div>
            
    <div className ="cartDetails col-md-6">
     <h5 className ="cartItem-title">{item.title}</h5>  
     <h6 className ="cartItem-price">price : <span className = "priceSpan">${item.price}</span></h6> 
     <div className = "cartItem-info">
  
     <input type = "number" className = "quantity" value = {quantity}/>
     <button onClick = {() => incrementQty()} className = "increment">+</button>
     <button onClick = {() => decrementQty()} className = "decrement">-</button>
      


  
         </div>
         <div className ="cartBtn">
         <button onClick = {() => removeItem(index)} type="button" className ="removeItem">Remove</button>
         </div>
        </div>
       </div>
      </div>
     </div>
   </div>
    
 ))}
 </Fragment>
  
 )}


export default Cart
