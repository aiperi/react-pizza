import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import axios from "axios";

const Home = () => {
    const dispatch = useDispatch()

    const {categoryId, sort} = useSelector(state => state.filterState) //destructuring
    // const categoryId = useSelector(state => state.filterState.categoryId)
    // const sort = useSelector(state => state.filterState.sort)

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const {searchValue} = React.useContext(SearchContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const sortBy = sort.sortProperty.replace('-', "");
        const orderBy = sort.sortProperty.includes("-") ? "desc" : 'asc'
        const search = searchValue ? `search=${searchValue}` : "";

        setIsLoading(true)
        axios.get(`https://649aab91bf7c145d02394317.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderBy}&${search}`).then(res => {
            setItems(res.data);
            setIsLoading(false)
        })

    }, [categoryId, sort, searchValue, currentPage])

    // const pizzas = items.filter(obj => {
    //     return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    // }).map(obj => (
    //     <PizzaBlock {...obj} key={obj.id}/>
    // ))
    const pizzas = items.map(obj => (<PizzaBlock {...obj} key={obj.id}/>))
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)


    return (<div className="container">
            <div className="content__top">
                <Categories value={categoryId} onCategoryClick={(id) => dispatch(setCategoryId(id))}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onPageChange={(number) => setCurrentPage(number)}/>
        </div>);
};

export default Home;