import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const onClick = (index) => {
        setActiveIndex(index)
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((cat, i)=>(
                    <li
                        key={cat}
                        className={activeIndex === i ? "active" : ""}
                        onClick={()=>onClick(i)}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;