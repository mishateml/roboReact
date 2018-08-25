import  React, {Component}  from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
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
        const {robots, searchField } = this.state;

        const filtredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
    
            return !robots.length ? (
            <div className='flex justify-center'>
              <h1 className='tc outline pa3'>LOADING.....</h1>
            </div>)
        :(
        <div className='tc'>
            <h1>RoboFrends</h1>
            <SearchBox searchChenge={this.onSearchChenge} />
            <Scroll className='scroll'>
                <CardList robots= {filtredRobots}/>
            </Scroll>

        </div> 
        );
    
    } 
}

export default App;