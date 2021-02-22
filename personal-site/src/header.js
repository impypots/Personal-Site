import React from 'react';

function Header({ goProjects, goHome, goContact, display}) {
    return (
        <div id="HeaderBox">
        <h4 className={display === 'home' ? 'headerFocus' : 'headerBlur'} onClick={goHome}>HOME</h4>
        <h4 className={display === 'work' ? 'headerFocus' : 'headerBlur'} onClick={goProjects}>WORK</h4>
        <h4 className={display === 'contact' ? 'headerFocus' : 'headerBlur'} onClick={goContact}>CONTACT</h4>
        </div>
    )
}

export default Header;