import React from 'react';

const Categories = ({ value, onCategoryClick}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((cat, i)=>(
                    <li
                        key={cat}
                        className={value === i ? "active" : ""}
                        onClick={()=>onCategoryClick(i)}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;