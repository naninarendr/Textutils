import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        if (!word) return '';
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    if (!props.alert) return null;

    return (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
           
        </div>
    );
}

export default Alert;
