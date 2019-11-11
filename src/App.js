import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import {Link, Switch, Route } from 'react-router-dom'; 
import Shop from './shop';
import Main from './main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header style={{background: 'black'}} title="Menu" scroll>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/shop" component={Shop}/>
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
