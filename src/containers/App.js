import React, { Component } from 'react';
import CardList from '../components/CardList';
import { cats } from '../components/cats';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }
  
  componentDidMount() {

    this.setState({cats: cats})
  };

  searchingcats = (event) => {
    this.setState({searchfield: event.target.value})
    
    // const filtering = this.state.cats.filter(cats =>{
    //   return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
  }
  render() {
    const { cats, searchfield} = this.state;
    const filtering = cats.filter(cats =>{
      return cats.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className = 'tc'>
      <h1 class="f-headline lh-solid">Cat Friends</h1>
      <Searchbox searchChange ={this.searchingcats}/>
      <Scroll>
      <CardList cats = {filtering} />
      </Scroll>
      </div> 
  );
  }
  
}


export default App;
