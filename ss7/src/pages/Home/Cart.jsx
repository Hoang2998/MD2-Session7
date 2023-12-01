import React from 'react'
import './Cart.scss'
export default function Cart({cart,setCart,total,setTotal}) {

    const addValue = (id)=>{    
        const index = cart.findIndex((item)=>{
         return item.id == id
        })
             let arr = [...cart]
             arr[index].quantity = arr[index].quantity + 1
             setCart(arr)
             let totala = cart.reduce((a,item)=>{
                return a + item.price*item.quantity
            },0)
            setTotal(totala)
     }
     const decreaValue = (id)=>{    
        const index = cart.findIndex((item)=>{
         return item.id == id
        })      
            
             let arr = [...cart]
             arr[index].quantity = arr[index].quantity - 1
             if(arr[index].quantity < 0){
                arr[index].quantity = 0
             }
             setCart(arr)
             let totala = cart.reduce((a,item)=>{
                return a + item.price*item.quantity
            },0)
            setTotal(totala)
     }
  return (
    <>
    <div className='cart'>
        <h1>My Cart</h1>
            <table className='cart__table'>
                <thead>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    {
                        cart.map((item,index)=>{
                            return  <tr key ={index}>
                                        <td>{item.name}</td>
                                        <td className='cart__quantity'>
                                            <button className='cart--btn' onClick={()=>{decreaValue(item.id)}}>-</button>   
                                            <div  className='cart--quantity'><p style={{textAlign:'center',marginTop:'1vw'}}>{item.quantity}</p></div>
                                            <button className='cart--btn' onClick={()=>{addValue(item.id)}}>+</button>   
                                        </td>
                                        <td>{item.price}$</td>
                                        <td>{item.quantity*item.price}$</td>
                                    </tr>
                        })
                    }
                    
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={3} style={{textAlign:'right'}}> total bill:</th>
                        <th>{total}</th>
                    </tr>
                </tfoot>
            </table>

    </div>
    
    </>
  )
}
