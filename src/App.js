import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchText: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(userData => this.setState({monsters:userData})).catch(err => {'Got Error!'})
  }

  handleChange = e =>{
    this.setState({searchText : e.target.value});
  }

 render(){
const {monsters,searchText} = this.state;
const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="App">
    <h1>Monster Roldex</h1>

    <SearchBox placeholder='Type to Search Monsters' handleChange={this.handleChange} />

    <CardList monsters={filterMonsters}/>
    </div>
  );
 }
}

export default App;
