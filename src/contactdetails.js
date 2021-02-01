import React from 'react';

function ContactDetails(props) {
    return (
        <div>
            <h1>My Name is {props.name}</h1>
            <p>My Age is {props.age}</p>
        </div>
    );
}
export default ContactDetails;