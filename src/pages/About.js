import React from "react";
import background from "../logo/background.jpg";

const About = () => {
    const infoCompany =
        {
            name: 'CarZilla inc',
            address:
                {
                    state: 'CA',
                    city: 'San Jose',
                    street: 'Stealership street',
                    building: 369,
                },
            phone: '+3 234-342-5333',
            email: 'carzilla@rpm.com'
        }

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <div>
            <h3>{infoCompany.name}</h3>
            {infoCompany.address.state},
            {infoCompany.address.city},
            <br/>
            {infoCompany.address.street},
            {infoCompany.address.building}
            <hr/>
            <div>
                <strong> Our contact information: </strong>
                <br/> tel# {infoCompany.phone}
                <br/> email: {infoCompany.email}
            </div>
        </div>
    </div>
    );
}

export default About;