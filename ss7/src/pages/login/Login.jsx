import React from 'react'
import './Login.scss'
import { AiFillAlipayCircle } from "react-icons/ai";
import abc from '../../assets/images/sheep.png'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert';

export default function Login() {
  return (
    <>
    <h1>Log in</h1>
    <AiFillAlipayCircle></AiFillAlipayCircle>
    <img src={abc} alt="" />
    <div className="login">
        <div className="login__email">
            <input type="text" className="login--input"/>
        </div>
        <div className="login__password">
            <input type="text" className="login--input" />
        </div>
        <div className="login__button">
            {/* <button>add</button> */}
            <Button variant='contained'>Login</Button>
            <Button variant='outlined'>Login</Button>
            <Button variant='text'>Login</Button>
            <Button variant='text' startIcon={<DeleteIcon style={{color:'red'}}></DeleteIcon>}>delete</Button>
        </div>
    </div>
   
    </>

  )
}
