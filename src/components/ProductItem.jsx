import React, {useState} from 'react'

export default function ProductItem(props) {
  //const [product, setProduct] = useState({id: 0, title: '', img: '', desc: '', category: '', price: ''}) 
  const addNewProduct = (e) => {
    e.preventDefault()
    const newProduct = {
        //id: Date.now(), title: props.product.title, img: props.product.img, desc: props.product.desc, category: props.product.category, price: props.product.price
        ...props.product, id: props.product.id
    };
    props.onAdd(newProduct)
    //setProduct({title: '', img: '', desc: '', category: '', price: ''})
  }
  return (
    <div className="item">
        <img className="" src={"./img/"+props.product.img}/>
        <h2>{props.product.title}</h2>
        <p>{props.product.desc}</p>
        <b>${props.product.price}</b>
        <div className="add-to-cart" onClick={(e)=>addNewProduct(e)}>+</div>
    </div>
  )
}
