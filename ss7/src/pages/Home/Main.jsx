import React,{useState} from 'react'
import Product from './Product'
import './Main.scss'
import Cart from './Cart'

export default function Main({products}) {
  const [cart,setCart] = useState([])
  const [total,setToltal] = useState("")   
  return (
    <>
    <div className='main'>
        {
            products.map((item,index)=>{
               return <Product product={item} key={index} cart={cart} setCart={setCart}  total={total}
               setTotal={setToltal}
               ></Product>
            })
        }
    </div>
    <Cart 
    cart={cart} 
    setCart={setCart}
    total={total}
    setTotal={setToltal}
    ></Cart>
    </>
    
  )
}
