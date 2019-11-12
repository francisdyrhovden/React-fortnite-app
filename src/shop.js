import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import './App.css';
import Clock from './clock';

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
            <Grid style={{ paddingTop: '2em' }}>
                <div className="shop-banner">
                    <Cell col={8}>
                        <h4>FORTNITE SHOP</h4>
                    </Cell>
                    <Cell col={4}>
                        <Clock/>
                    </Cell>
                </div>
            </Grid>
            <Grid className="shop-items" style={{paddingBottom: '5em'}}>
                {items.map(item => (
                    <Cell key={item.itemId} col={3}>
                        <img className="avatar-img" src={item.item.images.information} alt="" />
                    </Cell>
                ))}
            </Grid>
        </div>
    );
}

export default Shop;

