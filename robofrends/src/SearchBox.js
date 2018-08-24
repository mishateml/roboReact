import React from 'react';

const SearchBox = ({ searchChenge}) => {
    return(
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue'
             type= 'search'
             placeholder='search robo'
             onChange={searchChenge}
             />
        </div>
    );
}
export default SearchBox;