import React, { Fragment } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectedProduct } from './redux/actions/productActions'
import { Link } from 'react-router-dom';


const ProductComponent = () => {
   const products = useSelector((state) => state.allProducts.products)
    const Mydispatch = useDispatch()

    const selectProduct = (id) => {
       Mydispatch(selectedProduct(products[id]))
      
   }
  //  let myCart = useSelector((state) => state.shop.cart)
  //   if (myCart.length > 0 ){myCart.splice(0, myCart.length)
  //   }
       return (
        <Fragment>
        <div className="container col-12">
        <div className="row"> 
        { products.map((product,id) => (
           
         <div className = "card col-sm-2" key = {product.id} onClick = {() => selectProduct(id)}>
         <Link className = "cardInfo" to = {`/product/${product.id}`}>   
           <img src = {product.image} className = "card-img-top" alt = {product.title} />
         <div className = "card-body">
          <h5 className = "card-title">{product.title}</h5>
          <div className = "myDetails">Details</div>
         
          </div>
         </Link> 
         </div>
     ))}
     </div>
     </div>
     </Fragment>
      
      
      
       )}

export default ProductComponent
