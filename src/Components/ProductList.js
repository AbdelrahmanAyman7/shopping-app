import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import {setProducts} from '../Components/redux/actions/productActions'

const ProductList = () => {
   const products = useSelector((state) => state.allProducts.products);
   const dispatch = useDispatch(); 

   const fetchProducts = () => {
      axios.get('https://fakestoreapi.com/products')
      .then (res => {
        dispatch(setProducts(res.data)) 
      })
      .catch(err => {
          console.log("error",err)
      })   
    } 
   useEffect(() => { 
       fetchProducts();
   }, []);

    console.log(" products: ", products)

    return (
        <div>
         <ProductComponent/>
        </div>
    )
}

export default ProductList
