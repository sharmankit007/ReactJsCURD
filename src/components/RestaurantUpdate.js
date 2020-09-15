import React, { Component } from 'react';

export class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            title:null,
            rating:null,
            address:null,

        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/posts/'+this.props.match.params.id).then((response) => {
        response.json().then((result) => {
            this.setState({
                id: result.id, 
                title: result.title,
                rating: result.rating,
                address: result.address
            })
        })
    })
    }
    update(){
        fetch('http://localhost:3000/posts/'+this.state.id,{
            method:"Put",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Data has been Updated.");
            })
        })
        console.warn(this.state);
    }
    render() {
        console.warn(this.state.name);
        return (
           
            <div>
                <h1>RestaurantUpdate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({title:event.target.value})}} 
                    placeholder="Restaurant Name" value={this.state.title}/><br/><br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
                    placeholder="Restaurant Rating" value={this.state.rating}/><br/><br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} 
                    placeholder="Restaurant City" value={this.state.address}/><br/><br/>
                    <button onClick={()=>{this.update()}}>Update Restaurant</button>
                    </div>
            </div>
        );
    }
}

export default RestaurantUpdate;
