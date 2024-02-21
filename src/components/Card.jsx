import "./Card.css";
import illustration from "./illustration-sign-up-desktop.svg";
import iconList from "../images/icon-list.svg";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <h1>Stay updated!</h1>

        <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
        <ul>
          <div className="icon-list">
            <img src={iconList} />
            <li>Product discovery and building what matters </li>
          </div>
          <div className="icon-list">
            <img src={iconList} />
            <li>Measuring to ensure updates are a success </li>
          </div>
          <div className="icon-list">
            <img src={iconList} />
            <li>And much more! </li>
          </div>
        </ul>
        <label htmlFor="email" className="label">
          Email Address
        </label>
        <form>
          <input
            type="email"
            placeholder="email@company.com "
            className="form-input"
          />
        </form>
        <button className="subscribe-button">
          Subscribe to monthly subscription
        </button>
      </div>
      <div className="card-picture">
        <img src={illustration} />
      </div>
    </div>
  );
}
export default Card;
