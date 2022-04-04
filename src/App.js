import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route
                exact
                path='/cryptocurrencies'
                component={Cryptocurrencies}
              />
              <Route exact path='/crypto/:coindId' component={CryptoDetails} />
              <Route exact path='/news' component={News} />
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Copyright © 2022
            <a href='https://adambowman.tech' target="_blank" rel="noreferrer"> ACB Consulting</a> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            {/* <Link to='/exchanges'>Exchanges</Link> */}
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
