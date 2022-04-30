import React from "react";
import "./styles.css";
import Header from "./components/Header"
import Card from './components/WeatherForcast'
import cardsArr from "./data"
console.log("this is cardsArr:", cardsArr)

export default function App() {
  return (
    <div className="App">
      <Header />
      <section>
        {
          cardsArr.map((card, i) =>
          <Card
            imgSrc={card.imgSrc}
            condition={card.condition}
            time={card.time}
          />
        )}
      </section>
    </div>
  );
}
