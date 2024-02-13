import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Stay updated!</h1>

        <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
        <ul>
          <li>Product discovery and building what matters </li>
          <li>Measuring to ensure updates are a success </li>
          <li>Best practices for scaling your product </li>
          <li>And much more! </li>
        </ul>
      </div>
      <div className="card-form">
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
        <img src="./illustration-sign-up-desktop.svg" />
      </div>
    </div>
  );
}
export default Card;
