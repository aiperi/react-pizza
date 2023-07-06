import React from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sort, setSort] = useState({
        name: "популярности",
        sortProperty: "rating"
    });

    useEffect(() => {

        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const sortBy = sort.sortProperty.replace('-', "");
        const orderBy = sort.sortProperty.includes("-") ? "desc" : 'asc'


        setIsLoading(true)
        fetch(`https://649aab91bf7c145d02394317.mockapi.io/items?${category}&sortBy=${sortBy}&order=${orderBy}`).then((res) => {
            return res.json();
        }).then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })

        window.scrollTo(0, 0)
    }, [categoryId, sort])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onCategoryClick={(id) => setCategoryId(id)}/>
                <Sort type={sort.name} clickSort={(id) => setSort(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) :
                    items.map(obj => (
                        <PizzaBlock {...obj} key={obj.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;