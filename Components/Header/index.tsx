import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <ul>
        <li><a href='/'>HomePage</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/products'>Product</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Header