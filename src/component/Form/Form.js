import React, {Component} from 'react';
import axios from 'axios';


export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
          inputName: '',
          inputPrice: '',
          inputImageUrl: '',
          
        }
      }
     
     
    
      handleInput(props, val){
        this.setState({
          props: val
        })
      }
  handleClick(){
      let newProduct = {
          imageUrl: this.state.inputImageUrl,
          name: this.state.inputName,
          price: this.state.price
      }
      axios.post('/api/inventory', newProduct).then((res) => {
          this.setState({inventoryList: res.data})
      })
  }
      
  

   
    render(){
        
        return(
         
       <div className="create-box">
       <h1>Product</h1>
       <div>Image URL:</div>
       <input onChange={e => this.handleInput(e.target.value)} placeHolder="image URL"/>
       <div>Product Name:</div>
        <input onChange={e => this.handleInput(e.target.value)} placeHolder="Product Name" />
        <div>Price:</div>
        <input onChange={e => this.handleInput(e.target.value)} placeHolder="Price" value="0"/>
<div className="button-box">
        <button onClick={() => this.handleClick()}>add to inventory</button>
        <button>Cancel</button>
</div>
    </div>
        

    
       
        )
    }
}