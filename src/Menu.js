function Menu() {
    const headerMenu = ['Sport cars', 'Vans', 'Coupe', 'Sedan'];

    return (
        <div>
            {headerMenu.map((el, i) =>
                <li key={i}>{el}</li>
            )
            }
        </div>
    );
}
export default Menu;