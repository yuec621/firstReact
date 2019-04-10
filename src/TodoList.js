import React from 'react';
import TodoItem from './TodoItem';
// import logo from './logo.svg';
// import './App.css';
//定义一个React组件
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list:[
        // 'learn react',
        // 'learn english',
        // 'learn vue'

      ],
      inputValue:''
    }
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  
    // alert('click');
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
      // console.log(e.target.value);
    })
    

  }
  handleItemClick(index){
    // console.log(index+1)
    // const list=[...this.state.list];
    // list.splice(index,1);
    // this.setState({
    //   list
    // })
  }
  handleDelete(index){
    const list=[...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  render() {
    //jsx语法：只能写表达式  不能写语句
    return (
      <div>
      <div>
       <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
       <button onClick={this.handleBtnClick.bind(this)}>add</button>
      </div>
      <ul>
        {/* <li>learn react</li>
        <li>learn english</li> */
        this.state.list.map((item,index)=>{
          return <TodoItem handleDelete={this.handleDelete.bind(this)} key={index} content={item} index={index} />

      
          // return<li key={index} onClick={this.handleItemClick.bind(this)}>{item}</li>
        })
        }

      </ul>
      </div>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      
    );
  }
}

export default TodoList;
