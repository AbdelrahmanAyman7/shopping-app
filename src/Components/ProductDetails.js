import React,{Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './redux/actions/productActions'

const ProductDetails = () => {
  const Product_selected = useSelector((state) => state.product.Selected_Product)
  const dispatchh = useDispatch()
  const addItem = (index) => {
    dispatchh(addToCart(Product_selected[index]))
  }
    return (
      <Fragment>
      { Product_selected.map((item,index) => (
         
      <div className ="mainContainer col-12" key={index}>
      <div className ="card col-9" id = "cardDetail">
      <div className ="container-fluid">
      <div className ="wrapper">
       <div className ="preview col-md-6">       
        <div className ="preview-pic tab-content">
         <div className ="tab-pane active" id="pic-1"><img src = {item.image} alt = {item.title} key = {item.id}/></div>              
        </div>          
       </div>
              
      <div className ="details col-md-6">
       <h3 className ="product-title">{item.title}</h3>
       <h5 className = "card-text">{item.category}</h5>              
       <p className ="product-description">{item.description}</p>
       <h4 className ="price">price: <span>${item.price}</span></h4>
       
       <h5 className ="sizes">sizes:
       <span className ="size" data-toggle="tooltip" title="small">s</span>
       <span className ="size" data-toggle="tooltip" title="medium">m</span>
       <span className ="size" data-toggle="tooltip" title="large">l</span>
       <span className ="size" data-toggle="tooltip" title="xtra large">xl</span>
       </h5>
       
       <h5 className ="colors">colors:
         <span className ="color orange" data-toggle="tooltip" title={item.title}></span>
         <span className ="color green"></span>
         <span className ="color blue"></span>
       </h5>

        <div className ="action">
          <button onClick = {() => addItem(index)} type="button" className ="detailsAdd">Add to cart</button>
           </div>
          </div>
         </div>
        </div>
       </div>
     </div>
      
   ))}
   </Fragment>
    
   )}

export default ProductDetails
