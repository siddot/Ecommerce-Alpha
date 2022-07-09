import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  const showOrders = (props) => {
    let sumOfMoney = 0;
    props.orders.forEach(el => sumOfMoney += Number.parseFloat(el.price))
    return(
        <div>
            {props.orders.map(el => (<Order onDelete={props.onDelete} key={el.id} item={el}/>))}
            <p className="summa">Сумма: {new Intl.NumberFormat().format(sumOfMoney)}$</p>
        </div>)
    
  }
  const showNothing = () => {
    return(<div className='empty'>
        <h2>No products</h2>
    </div>)
  }
  return (
    <header>
        <div>
            <span className="logo">House Staff </span>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Адрес</li>
            </ul>
            <FaShoppingCart onClick={() => {setCartOpen(cartOpen = !cartOpen)}} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className="presentation"></div>
    </header>
  )
}
