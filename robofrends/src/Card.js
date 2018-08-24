import React from 'react';


const Card = (props) => {
    const {id, email, name} = props;
    return (
        <div className="bg-light-green w5 tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
            
        </div>
    );
}

export default Card;