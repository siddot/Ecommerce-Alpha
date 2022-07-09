import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Reaсt, { useState, useEffect } from 'react';
import Items from './components/Items';
import Categories from './components/Categories';

function App(props) {
  const [orders, setOrders] = useState([])
  const [currentItems, setCurrentItems] = useState([
    {
      id: 1,
      title: 'Стул слабый',
      img: "chair-grey.jpeg",
      desc: "lorem huy upsum bottle strike metha faka dope beatch bro fucking coke fuck your moke and u gonna dead",
      category: "chairs",
      price: "49.99"
    },
    {
      id: 2,
      title: 'Cтол сильный',
      img: "table-grey.jpeg",
      desc: "lorem huy upsum bottle strike metha faka dope beatch bro fucking coke fuck your moke and u gonna dead",
      category: "tables",
      price: "149.99" 
    },
    {
      id: 3,
      title: 'Диван классный',
      img: "sofa-grey.jpeg",
      desc: "lorem huy upsum bottle strike metha faka dope beatch bro fucking coke fuck your moke and u gonna dead",
      category: "sofas",
      price: "349.99" 
    }
  ]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Стул слабый',
      img: "chair-grey.jpeg",
      desc: "lorem huy upsum bottle strike metha faka dope beatch bro fucking coke fuck your moke and u gonna dead",
      category: "chairs",
      price: "49.99"
    },
    {
      id: 2,
      title: 'Cтол сильный',
      img: "table-grey.jpeg",
      desc: "lorem huy upsum bottle strike metha faka dope beatch bro fucking coke fuck your moke and u gonna dead",
      category: "tables",
      price: "149.99" 
    },
    {
      id: 3,
      title: 'Диван классный',
      img: "sofa-grey.jpeg",
      desc: "lorem huy upsum bottle strike metha faka dope beatch bro fucking coke fuck your moke and u gonna dead",
      category: "sofas",
      price: "349.99" 
    }
  ])

  const deleteFromOrdersList = (id) => {
    console.log(id)
    setOrders(orders.filter(el => el.id !== id))
  }

  const addToOrder = (item) =>{
    let inArray = false;
    //setOrders([...orders, {id: item.id, title: item.title, img: item.img, desc: item.desc, category: item.category, price: item.category}])
    orders.forEach(el=>{
      if(el.id === item.id){
        inArray = true;
      }
    })
    if(!inArray){
      setOrders([...orders, item])
    }
  }

  const chooseCategory = (category) => {
    if(category === "all"){
      setCurrentItems(products)
      return
    }
    setCurrentItems(products.filter(el => el.category === category))

  }


  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteFromOrdersList}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items products={currentItems} onAdd={addToOrder}/>
      <Footer />
    </div>
  );
}

export default App;
