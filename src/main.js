import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Cell } from 'react-mdl';

function Main() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.fortnitetracker.com/v1/profile/psn/francissoliman',
            {
                method: 'GET',
                headers: {
                    'TRN-Api-Key': '43819846-9c32-4618-bee0-e9e64646cf2d'
                }
            });
        const items = await data.json();
        console.log(items);
        setItems(items.data)
    }

    return (
        <div className="main">
            <Grid style={{ paddingTop: '2em' }}>
                <div className="shop-banner">
                    <Cell col={12}>
                        <h4>FORTNITE STATS</h4>
                    </Cell>
                </div>
            </Grid>
            <Grid style={{ paddingBottom: '5em' }}>
                <Cell>

                </Cell>
            </Grid>
            <h2>UNDER CONSTRUCTION, GO BACK TO SHOP IN THE MEANTIME.</h2>
        </div>
    )
}

export default Main;
