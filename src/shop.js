import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const items = await data.json();
        console.log(items.data);
        setItems(items.data)
    }
    return (
        <div className="shop">
            <Grid className="demo-grid-1">
                <Cell col={4}>
                    <h1>Image: </h1>
                </Cell>
                <Cell col={4}>
                    <h1>Name: </h1>
                </Cell>
                <Cell col={4}>
                    <h1>Price: </h1>
                </Cell>
            </Grid>
            {items.map(item => (
                <Grid className="demo-grid-1" key={item.itemId}>
                    <Cell col={4}>
                        <img className="avatar-img" src={item.item.images.information} alt=""/>
                    </Cell>
                    <Cell col={4}>
                        <h3>{item.item.name}</h3>
                    </Cell>
                    <Cell col={4}>
                        <h3>{item.store.cost} V-Bucks</h3>
                    </Cell>
                </Grid>
            ))}
        </div>
    );
}

export default Shop;

