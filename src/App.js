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
            <Link to='/'>Shop</Link>
            <Link to='/main'>Stats</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Switch>
            <Route exact path="/" component={Shop}/>
            <Route exact path="/main" component={Main}/>
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
