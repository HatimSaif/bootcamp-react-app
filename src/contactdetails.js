import React from 'react';

function ContactDetails(props) {
    return (
        <div>
            <h1>My Name is {props.MyName}</h1>
            <p>My Age is {props.MyAge}</p>
        </div>
    );
}
export default ContactDetails;