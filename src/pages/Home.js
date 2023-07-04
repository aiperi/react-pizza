import React from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://649aab91bf7c145d02394317.mockapi.io/items').then((res) => {
            return res.json();
        }).then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) :
                    items.map(obj => (
                        <PizzaBlock {...obj} key={obj.id}/>
                    ))
                }
            </div>
        </>
    );
};

export default Home;