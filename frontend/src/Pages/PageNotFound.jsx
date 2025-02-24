import React from 'react';

const PageNotFound = () => {
    const containerStyle = {
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <div style={containerStyle}>
            <h1>Page Not Found (404)</h1>
        </div>
    );
};

export default PageNotFound;
