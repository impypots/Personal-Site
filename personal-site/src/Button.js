import React from 'react';

function Button({ value, onClick }) {
    return (
        <button className="frontbutton" onClick={onClick}>{value}</button>
    )
}

export default Button;