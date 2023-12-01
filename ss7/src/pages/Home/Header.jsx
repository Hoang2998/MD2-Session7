import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <>
    <nav className='nav'>
      <a className='nav--link' href="">Example site</a>
      <a className='nav--link' href="">Menu</a>
      <a className='nav--link' href="">Link</a>
      <select className='nav__select'>
        <option value="">Drop down</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </nav>
    </>
  )
}
