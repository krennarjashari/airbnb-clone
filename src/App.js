import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import data from './data'


import logo from "./images/airbnb-logo.png"
import logosport from "./images/sport.png";
import logostar from "./images/star.png";

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
        // item={item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // description={item.description}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  })

  return (

    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}



