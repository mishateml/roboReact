import React from 'react';

const Scroll = (props) => {
        return ( <div style = {{ overflow: 'scroll', border: ' 5px solid black', height: '800px', marginTop: '20px'}} >
                    { props.children } 
                 </div>
                )
                    }
        export default Scroll;