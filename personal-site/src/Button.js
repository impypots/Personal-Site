import React from 'react';

function Button({ value, color, onClick }) {
    return (
        <button className="frontbutton" onClick={onClick} style={{
            backgroundColor: color,
        }}>{value}</button>
    )
}

export default Button;