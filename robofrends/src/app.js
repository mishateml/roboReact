import  React, {Component}  from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox'; 
import './app.css';


class App extends Component{
constructor(){
    super()
    this.state={
        robots: [],
        searchField:''
    }
}
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>{this.setState({robots: users})});  
        

    }

    onSearchChenge = (event) => {
        this.setState({
            searchField: event.target.value
        })
     
    }

    render(){

        const filtredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        
        if(this.state.robots.length === 0){
            return (
            <div className='flex justify-center'>
              <h1 className='tc outline pa3'>LOADING.....</h1>
            </div>)
        }
        else
        {
        return (
        <div className='tc'>
            <h1>RoboFrends</h1>
            <SearchBox searchChenge={this.onSearchChenge} />
            <CardList robots= {filtredRobots}/>

        </div> 
        );
    }
    } 
}

export default App;