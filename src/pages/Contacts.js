import React from "react";
import background from "../logo/background.jpg";

const Contacts = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            </div>
        </div>
    );
}

export default Contacts;