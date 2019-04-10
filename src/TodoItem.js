import React from 'react';
// import TodoList from './TodoList'
// import { deflate } from 'zlib';
class TodoItem extends React.Component{
    handleDelete(){
        this.props.handleDelete(this.props.index);
    }
    render(){
        return(
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}
export default TodoItem