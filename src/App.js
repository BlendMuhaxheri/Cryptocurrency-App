import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components/index/index'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route exact path='/cryptocurrencies' component={Cryptocurrencies} />
              <Route exact path='/cryptodetails/:id' component={CryptoDetails} />
              <Route exact path='/news' component={News} />
            </Switch>
          </div>
        </Layout>

        <div className='footer' >
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse  <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
