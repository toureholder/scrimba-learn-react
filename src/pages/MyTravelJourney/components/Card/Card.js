import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="my-travel-journey--card--container">
        <img src={props.imageUrl} alt=""></img>

        <div>
          <div className="my-travel-journey--card--location">
            <span className="material-icons">location_on</span>

            <span className="my-travel-journey--card--location--name">
              {props.location.toUpperCase()}
            </span>

            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>

          <h2>{props.title}</h2>

          <p>
            <strong>
              {props.startDate} - {props.endDate}
            </strong>
          </p>

          <p>{props.description}</p>
        </div>
      </div>

      {props.showDivider && (
        <div className="my-travel-journey--card--divider"></div>
      )}
    </>
  );
}
