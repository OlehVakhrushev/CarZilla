import React from "react";
import { v4 as uuidv4 } from 'uuid';

const FooterMenu = () => {
    const footerMenu = [
        {
            id: uuidv4(),
            title: 'FAQ'
        },
        {
            id: uuidv4(),
            title: 'Customer Service'
        },
        {
            id: uuidv4(),
            title: 'Schedule Service'
        },
        {
            id: uuidv4(),
            title: 'About Us'
        },
    ]

    return (
        <ul>
            {footerMenu.map(el=>
            <li key={el.id}>{el.title}</li>
            )
            }
        </ul>
    );
}

export default FooterMenu;