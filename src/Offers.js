import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Bmw from './img/Bmw.jpg';
import Chrysler from './img/Chrysler.jpg';
import Honda from './img/Honda.jpg';
import Volvo from './img/Volvo.jpg';



const Offers = () => {

    const cars = [
        {
            id: uuidv4(),
            img: Volvo,
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
            img: Chrysler,
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
            img: Bmw,
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
            img: Honda,
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

    return (
        <ul>
            {cars.map(el=>(
                <li key={el.id}>
                    <hr/>
                    <strong> {el.brand + ' ' + el.model}</strong>
                    <br/> <i>{el.specs.hp + ' ' + el.specs.engine + ' ' + el.specs.type}</i>
                    <br/> {el.description}
                    <br/> Price: $ {el.price}
                    <br/> <img src={el.img} alt="img" height={100}/>
                </li>
            ))}
        </ul>
    );
}
export default Offers;

// <br/> <img src={el.picture} alt={`Picture of ${el.brand} ${el.model}`} style={{width: '100px', height: '90px'}}/>