import { ActionTypes } from "../constants/ActionTypes"

 const INITIAL_STATE = {
  products: [], 
  cart: [], 
}

export const productReducer = (state = INITIAL_STATE.products,action) => {
  switch(action.type){
      case ActionTypes.SET_PRODUCTS:
          return {
              ...state,
              products: action.payload
          }

      default: return state
  }
} 
export const selectedProductReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
      case ActionTypes.SELECTED_PRODUCT:
          return {
              ...state,
                Selected_Product: [action.payload] 
          }
      default: return state
  } 
} 
export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
          // get the item data from products array  
        //const item = state.products.find((product => product.id === action.payload.id ))
          // check if the item is already in the cart
       // const inCart = state.cart.find((item => item.id === action.payload.id ? true : false))        
            return {
              ...state,
              cart: [...state.cart, action.payload],
               // if the item is already in the cart adjust qty              
              //cart: inCart ? 
              //state.cart.map((item => item.id === action.payload.id ?
                 //{...item, qty: item.qty + 1}
                 //: item ))
                // : [...state.cart, {...item, qty: 1}]
                
            }
        // case ActionTypes.REMOVE_FROM_CART:
        //     return {
        //       ...state,  
        //       cart: state.cart.filter(item => item.id !== action.payload.id)
        //     }   
        case ActionTypes.REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(
              (item, index) => index !== action.payload
            ),
          };
        // case ActionTypes.ADJUST_QTY:
        //     return {
        //       ...state,  
        //       cart: state.cart.map((item => item.id === action.payload.id ?
        //          {...item, qty: action.payload.qty}
        //          : item))    
        //     }         
        // case ActionTypes.LOAD_CURRENT_ITEM:
        //     return {
        //         ...state,
        //         currentItem: action.payload
        //     }

        default: return state
    } 
  } 
  