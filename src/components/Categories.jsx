import React from 'react';

const Categories = (props) => {
    const categories = [
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'tables',
            name: 'Столы'
        },
        {
            key: 'chairs',
            name: 'Стулья'
        },
        {
            key: 'sofas',
            name: 'Диваны'
        }
    ]
    return (
        <div className="categories">
            {categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}

export default Categories;
