import React from 'react';

function Button({ value, color }) {
    return (
        <button className="frontbutton" style={{
            backgroundColor: color,
        }}>{value}</button>
    )
}

export default Button;