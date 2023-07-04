import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    console.log(styles)
    return (
        <div className={styles.root}>
            <h1>
                <span> &#x1F615; </span>
                <br/>
                Ничего не найдено!
            </h1>
            <p>К сожелению данная страница отсутствует в нашем интернет магазине</p>
        </div>

    );
};

export default NotFoundBlock;