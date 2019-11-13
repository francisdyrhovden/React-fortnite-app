import React from 'react';
import './App.css';
import { Layout, Header, Content, Navigation } from 'react-mdl';
import {Link, Switch, Route } from 'react-router-dom'; 
import Shop from './shop';
import Main from './main';

function App() {
  return (
    <div>
      <Layout>
        <Header style={{background: 'black'}} title="FORTNITE" scroll>
          <Navigation>
            <Link to='/'>Stats</Link>
            <Link to='/shop'>Shop</Link>
          </Navigation>
        </Header>
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
