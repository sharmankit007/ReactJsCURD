import React, { Component } from 'react';

export class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state ={
            seachData: null,
            noData: false,
        }
    }
    search(key){
        fetch("http://localhost:3000/posts?q=" + key).then((data)=>{
            data.json().then((resp) =>{
                if(resp.length>0){
                    this.setState({searchData:resp, noData:false})
                }else{
                    this.setState({noData:true, searchData:null})
                }

            })
        })
    }
    render() {
        return (
            <div>
            <h1>RestaurantSearch</h1>
            <input type="text" onChange={(event) => this.search(event.target.value)} />
            <div>
            {
                this.state.searchData?
                <div>
                {
                    this.state.searchData.map((item) =>
                    <div>{item.title}</div>

                            )
                }
                </div>
                :""
            }
            {
                this.state.noData?<h3>No Data Found</h3>:null
            }
            </div>
            </div>
        );
    }
}

export default RestaurantSearch;
