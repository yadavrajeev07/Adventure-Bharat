// LogoutButton.js
import React from 'react';

const LogoutButton = ({ onLogout }) => {
    return (
        <button onClick={onLogout} style={buttonStyle}>
            Logout
        </button>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default LogoutButton;
