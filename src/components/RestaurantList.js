import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Table } from 'react-bootstrap';
export class RestaurantList extends Component {
    constructor() {
        super();
        this.state={
            list: null,
        }   
    }
    componentDidMount(){
        this.getData();
        
    }
    getData(){
        fetch("http://localhost:3000/posts").then((response) => { 
            response.json().then((result) => {
                //console.log(result);
                this.setState({ list: result})
            })
        })
       }
    delete(id){
        fetch('http://localhost:3000/posts/'+id,{
            method:"Delete",
            headers:{
                'Content-Type':'application/json'
            },
           // body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                this.getData();
                alert("Data has been Deleted.");
            })
        })
    }
    render() {
        return (
            <div>
            <h1>RestaurantList</h1>
            {
                this.state.list?
                <div>
                <Table striped bordered hover>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rating</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
                {
                    this.state.list.map((item, i)=> 
                    <tr>
                    <td>{i +1 }</td>
                    <td>{item.title}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td><Link to={"/update/" + item.id}>Update</Link>
                    <span onClick={() => this.delete(item.id)}>Delete</span>
                    </td>


                  </tr>
                    )
                }
                </Table>
                </div>
                :<p>Please Wait...</p>
            }
            </div>
        );
    }
}

export default RestaurantList;
