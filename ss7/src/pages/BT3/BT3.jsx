import React,{useState} from 'react'
import './BT3.scss'
import ab from '../../assets/images/sheep.png'
import { AiOutlineMenu } from "react-icons/ai";
export default function BT3() {
    const [status,setStatus] = useState("none")
    const [color,setColor] = useState("same colora")

    const changeStatus = ()=>{
        if(status == "none"){
            setStatus("block")
            setColor("same colorb")
        }else{
            setStatus("none")
            setColor("same colora")
        }
    }
  return (
    <>
    <button onClick={changeStatus}><AiOutlineMenu></AiOutlineMenu></button>
    <div className='contain'>
    <div  className={color} >
        <img src={ab} alt="" />
        <ul>
            <li>Menu</li>
            <li>Store</li>
            <li>User</li>
        </ul>
    </div>
    <div>
        
    </div>
    </div>
    
    </>
  )
}
