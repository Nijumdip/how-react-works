import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '5px' }}>
            <h3> This is Dial</h3>
            <p> Step so far :{props.steps} </p>
        </div>
    );
};

export default Dial;