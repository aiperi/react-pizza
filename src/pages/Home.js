import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";

const Home = ({searchValue}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [currentPage,setCurrentPage ] = useState(1);
    const [sort, setSort] = useState({
        name: "популярности",
        sortProperty: "rating"
    });

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const sortBy = sort.sortProperty.replace('-', "");
        const orderBy = sort.sortProperty.includes("-") ? "desc" : 'asc'
        const search = searchValue ? `search=${searchValue}` : "";

        setIsLoading(true)
        fetch(`https://649aab91bf7c145d02394317.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderBy}&${search}`).then((res) => {
            return res.json();
        }).then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [categoryId, sort, searchValue, currentPage])

    // const pizzas = items.filter(obj => {
    //     return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    // }).map(obj => (
    //     <PizzaBlock {...obj} key={obj.id}/>
    // ))
    const pizzas = items.map(obj => (
        <PizzaBlock {...obj} key={obj.id}/>
    ))
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onCategoryClick={(id) => setCategoryId(id)}/>
                <Sort type={sort.name} clickSort={(id) => setSort(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onPageChange={(number)=>setCurrentPage(number)}/>
        </div>
    );
};

export default Home;