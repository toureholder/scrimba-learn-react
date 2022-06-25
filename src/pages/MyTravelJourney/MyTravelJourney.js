import "./MyTravelJourney.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import places from "./data/places";

export default function MyTravelJourney() {
  const cards = places.map((place, i) => (
    <Card key={i} {...place} showDivider={i < places.length - 1} />
  ));

  return (
    <>
      <Header />
      <div className="app-wrapper">
        <section className="my-travel-journey-section">{cards}</section>
      </div>
    </>
  );
}
