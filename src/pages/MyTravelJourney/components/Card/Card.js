import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card--container">
        <img src={props.imageUrl} alt=""></img>

        <div>
          <div className="card--location">
            <span className="material-icons">location_on</span>

            <span className="card--location--name">
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

      {props.showDivider && <div className="card--divider"></div>}
    </>
  );
}
