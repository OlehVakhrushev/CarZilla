import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Menu from "./Menu";
import Categorie from "./Categorie";

function Repair() {
    const categories = [
        {
            id: uuidv4(),
            title: "Engine",
            description: "Discuss equipment issues, maintenance plans, and work performed with customers. Perform routine engine maintenance, such as lubricating parts and replacing spark plugs. Test and inspect engines for malfunctioning parts. Adjust components according to specifications."
        },
        {
            id: uuidv4(),
            title: "Transmission",
            description: "Rebuilding a transmission is an in-depth process that requires a significant amount of labor.",
        },
        {
            id: uuidv4(),
            title: "Wheels",
            description: "In cases that involve cracked rims, a wheel repair specialist will typically use a method of welding that adds material to fill in the cracks of the rim",
        },
        {
            id: uuidv4(),
            title: "Tires",
            description: "Tire repair means a process that includes expanding a hole, tear, fissure or blemish in a tire casing by grinding or gouging, applying adhesive and filling the hole or crevice with rubber.",
        },
        {
            id: uuidv4(),
            title: "Cooling System",
            description: "It's scientifically formulated to stop coolant leaks, thereby reducing antifreeze loss, while correcting other cooling system problems and helping to prevent costly repairs and breakdowns",
        },
        {
            id: uuidv4(),
            title: "Brakes",
            description: "A brake job usually involves replacing the brake linings , resurfacing the rotors and/or drums, adding new brake fluid and bleeding the system as needed, and looking for other worn components",
        },
        {
            id: uuidv4(),
            title: "Auto Body",
            description: "Vehicle damage reports, conduct inspections, develop plans, provide cost estimates, remove damaged parts and attach new ones, realign frames and structures, perform installations and upgrades, and refinish surfaces.",
        },
        {
            id: uuidv4(),
            title: "Electrical",
            description: "Installing and maintaining electrical systems contained in automotive vehicles",
        },
    ]

    const expenses = [
        {
            id: uuidv4(),
            date: "5.01.2023",
            value: 120,
            category: "Engine",
            description: "Ralphs grocery store"
        },
        {
            id: uuidv4(),
            date: "6.01.2023",
            value: 2550,
            category: "Transmission",
            description: "landlord"
        },
        {
            id: uuidv4(),
            date: "6.01.2023",
            value: 94,
            category: "Wheels",
            description: "Zara"
        },
        {
            id: uuidv4(),
            date: "6.01.2023",
            value: 175,
            category: "Tires",
            description: "Macy`s"
        },
        {
            id: uuidv4(),
            date: "8.01.2023",
            value: 65,
            category: "Cooling System",
            description: "At&t"
        },
        {
            id: uuidv4(),
            date: "8.01.2023",
            value: 875,
            category: "Brakes",
            description: "The J. Morey Company"
        },
        {
            id: uuidv4(),
            date: "9.01.2023",
            value: 88,
            category: "Engine",
            description: "Ralphs grocery store"
        },
        {
            id: uuidv4(),
            date: "10.01.2023",
            value: 55,
            category: "Auto Body",
            description: "Dents"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 23,
            category: "Engine",
            description: "7 Eleven"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 55,
            category: "Cooling System",
            description: "LA Fitness"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 55,
            category: "Electrical",
            description: "Cinemark Playa Vista and XD"
        },
        {
            id: uuidv4(),
            date: "12.01.2023",
            value: 65,
            category: "Transmission",
            description: "Auto Fuels Gas Station"
        },
        {
            id: uuidv4(),
            date: "12.01.2023",
            value: 115,
            category: "Brakes",
            description: "The Roof on Wilshire"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 23,
            category: "Engine",
            description: "Traders Joes"
        },
        {
            id: uuidv4(),
            date: "12.01.2023",
            value: 17,
            category: "Tires",
            description: "Joe Bell Express Car Wash"
        },
    ]

    const menu = [
        {
            id:uuidv4(),
            title:"Total",
        },
        {
            id:uuidv4(),
            title:"Discount",
        },
        {
            id:uuidv4(),
            title:"Labor Hours",
        },
        {
            id:uuidv4(),
            title:"Scam charge",
        },
    ]

    return (
        <div>
            <Menu menu={menu}/>
            <h1> Expenses: </h1>
            <div className="row align-items-start">
                {categories.map(el=>

                    <Categorie key={el.id} categorie={el}
                               expenses={expenses}
                    />

                )
                }

            </div>

        </div>
    );
}

export default Repair;