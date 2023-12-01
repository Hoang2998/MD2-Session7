import React from 'react'
import './Product.scss'
export default function Product({product,cart,setCart,total,setTotal}) {

    const addValue = (id)=>{    
       const index = cart.findIndex((item)=>{
        return item.id == id
       })
        if(index == -1){
            let productA = {
                name:product.name,
                id:product.id,
                price:product.price,
                quantity:1
            }
            setCart([...cart,productA])

            let arr = [...cart]
            arr.push(productA)
            let totala = arr.reduce((a,item)=>{
                return a + item.price*item.quantity
            },0)
            setTotal(totala)

            
            
        }else{
            let arr = [...cart]
            arr[index].quantity = arr[index].quantity + 1
            setCart(arr)
        }
        let totala = cart.reduce((a,item)=>{
            return a + item.price*item.quantity
        },0)
        setTotal(totala)
        
    }
  return (
    <>
        <div className="product">
            <div className="product__img">
                <img src={product.img} alt="" className='product--img'/>
            </div>
            <div className="product__info">
                <p>{product.name}</p>
                <p>{product.price}$</p>    
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, perferendis.</p>
                <button className='product--btn' onClick={()=>{addValue(product.id)}} > Add</button>
            </div>
        </div>
    </>
  )
}
