import React, { Component } from 'react';

export class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            title:null,
            rating:null,
            address:null,

        }
    }
    create(){
        fetch('http://localhost:3000/posts',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Data has been inserted.");
            })
        })
        console.warn(this.state);
    }
    render() {
        return (
            <div>
            <h1>RestaurantCreate</h1>
            <div>
            <input onChange={(event)=>{this.setState({title:event.target.value})}} 
            placeholder="Restaurant Name"/><br/><br/>
            <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
            placeholder="Restaurant Rating"/><br/><br/>
            <input onChange={(event)=>{this.setState({address:event.target.value})}} 
            placeholder="Restaurant City"/><br/><br/>
            <button onClick={()=>{this.create()}}>Add Restaurant</button>
            </div>
            </div>
        );
    }
}

export default RestaurantCreate;
