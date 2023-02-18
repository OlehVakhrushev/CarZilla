import React from "react";

const headerMenu = ['Sport cars', 'Vans', 'Coupe', 'Sedan'];
const cars = [
    {
        id: uuidv4(),
        brand: 'Volvo',
        model: 'V60',
        specs: {
            hp: 332,
            engine: 'V6',
            type: 'Sedan'
        },
        price: 34000,
        description: 'Fast and comfortable cars, fits for family, highest safety rating',


    },
    {
        id: uuidv4(),
        brand: 'Chrysler',
        model: 'Pacifica',
        specs: {
            hp: 280,
            engine: 'V6 Hybrid EV',
            type: 'Minivan'
        },
        price: 55000,
        description: 'Perfect for big families, great MPG, comfortable'
    },
    {
        id: uuidv4(),
        brand: 'BMW',
        model: 'M5',
        specs: {
            hp: 500,
            engine: 'V8',
            type: 'Sport Car'
        },
        price: 60000,
        description: 'High performance variant of the BMW 5 Series marketed under the BMW M sub-brand'
    },
    {
        id: uuidv4(),
        brand: 'Honda',
        model: 'Civic',
        specs: {
            hp: 160,
            engine: 'L4',
            type: 'Coupe'
        },
        price: 20000,
        description: 'Good performance, efficient fuel economy, and plenty of interior space make the Honda Civic a fine choice'
    },
]

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
const Home = () => {



    return (
        <div>
            <SiteName />

            <div>
        {headerMenu.map((el, i) =>
            <li key={i}>{el}</li>
            )
        }



                <ul>
            {cars.map(el=>(
                <li key={el.id}>
                <hr/>
                <strong> {el.brand + ' ' + el.model}</strong>
                <br/> <i>{el.specs.hp + ' ' + el.specs.engine + ' ' + el.specs.type}</i>
                <br/> {el.description}
                <br/> Price: $ {el.price}
                </li>
                ))}
                </ul>

                <ul>
                    {footerMenu.map(el=>
                        <li key={el.id}>{el.title}</li>
                    )
                    }
                </ul>
            </div>
        </div>

        </div>
    );
}

export default Home;