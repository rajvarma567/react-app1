import React, { Component } from 'react';
class User extends Component {
    state = {  }

    handleClick (a) {
        console.log(a)
    }
    render() { 
        return (
            <div>
                <button onClick={this.handleClick("a")}>click</button>
                <ul><li>{this.props.data}</li></ul>
                <button onClick={()=>this.props.click(this.props.data[2])}>click</button>
                <button onClick={this.props.c}>click</button>
            </div>
          );
    }
}
 
export default User;