import React from 'react';
import ProductItem from './ProductItem';

const Items = (props) => {
    return (
        <main>
            {props.products.map(p=>(
                <ProductItem product={p} key={p.id} onAdd={props.onAdd}/>
            ))}
        </main>
    );
}

export default Items;
