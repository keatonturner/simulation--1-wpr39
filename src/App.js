import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Form from './component/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventoryList: []
      
    }
  }
  componentDidMount(){
    axios.get('/api/inventory').then((res) => {
    this.setState({
      inventoryList: res.data
    })
    })
      }

  
  
 




  render() {
    return (
      <div className="App">
        <Header />
        <div>
        <Dashboard />
       
        <Form inventoryList={this.props.inventoryList}/>
       
        </div>
      </div>
    );
  }
}

export default App;
