import React from 'react';
import './App.css';
import Header from './components/molecules/Header';
import FormList from './components/organisms/FormList/FormList';
import { Route, Switch, Redirect } from 'react-router-dom';
import CreateForm from './components/organisms/CreateForm';
import { Layout } from './components/organisms/Layout/Layout';

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <Switch>
          <Route exact path='/' component={FormList} />
          <Route exact path='/addform' component={CreateForm} />
        </Switch> 
      </Layout>  
    </div>  
  );
}

export default App;
