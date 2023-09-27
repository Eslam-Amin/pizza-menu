import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}


function Header() {
    const headerStyle = {}

    return (<header className="header">
        <h1 style={headerStyle}>Fast React Pizza Co.</h1>
    </header>);
}

function Menu() {
    const pizzas = pizzaData;
    const numOfPizzas = pizzas.length;

    return <main className="menu">
        <h2>Our Menu</h2>

        {
            numOfPizzas > 0 ? (
                <>
                    <p>
                        Authentic italian Cuisine. 6 create dishes to choose from. all from out stove oven all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {
                            pizzas.map((pizza) =>
                                <Pizza pizzaObj={pizza} key={pizza.name} />)
                        }
                    </ul>
                </>
            ) : <p> We're still Working on our menu. please come back later :) </p>
        }

    </main>

}
function Pizza({ pizzaObj }) {
    //console.log("test");
    /*if (pizzaObj.soldOut) return (
        <li className="soldOutPizza pizza">
            <img src={pizzaObj.photoName} alt={pizzaObj.name + "image"} />

            <div>

                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>Sold Out! :(</span>
            </div>
        </li>
    )*/
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name + "image"} />

            <div>

                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "sold out :( " : pizzaObj.price}$</span>
            </div>
        </li>
    )

}
function Footer() {
    const getTime = function () {
        return new Date().toLocaleTimeString();
    }

    const [time, setTime] = React.useState(getTime());
    useEffect(function () {
        setInterval(function () {
            setTime(getTime())
        }, 1000)
    })
    const openHour = 12;
    const closeHour = 22;
    const hour = new Date().getHours();
    const isOpen = hour >= openHour && hour <= closeHour; return (<footer className="footer" >
        {
            isOpen ? (
                <Order orderObj={{ closeHour, time }} />
            ) : (
                <div className="order">
                    <p>it's {time}</p>
                    <p>We're Close until {openHour}:00 PM :)</p>
                </div >
            )
        }
    </footer >)

}

function Order({ orderObj }) {

    return (
        <div className="order">

            <p>it's {orderObj.time}, We're Open until {orderObj.closeHour - 12}:00 PM.</p>
            <p>Come Visit Us or order online. ;)</p>
            <button className="btn">Order Now</button>
        </div>
    )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/**
    React Before v18
    React.render(<App />)
*/