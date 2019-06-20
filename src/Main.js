import React, { Component } from 'react';
import User from './User.js';
import axios from 'axios';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {users : [],
       };
        
    }

    componentDidMount() {
        let promise = axios.get('https://my-json-server.typicode.com/rajvarma567/JSON1/users');
         promise.then(res=> {
            this.setState({
            users : res.data
            
         })
        }
         )
    }

    handleSubmit(a){
        console.log(a)
    }

    handle () {
        console.log("aa")
    }

    render() {
        console.log(this.state.users)
        let names = this.state.users.map(x=> x.name);
        return (
            <div>
        <User data ={names} click={this.handleSubmit} c={this.handle}/>
        </div>
        )
    }
}
 
export default Main;