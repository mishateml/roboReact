import  React from 'react';
import Card from './Card';

const CardList = (props) => {
 
    const {robots} =props;
    const cardArr = robots.map((usaer,i) => {
       return( <Card 
       key={i} 
       id={robots[i].id} 
       name= {robots[i].name} 
       email= {robots[i].email} 

       />)

    })

    return(
        <div>
         {cardArr}
        </div>
    );
}

export default CardList;