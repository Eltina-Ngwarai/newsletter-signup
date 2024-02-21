import iconSuccess from "../images/icon-list.svg";
import "./successCard.css";

function SuccessCard() {
  return (
    <div className="success-card">
      <img src={iconSuccess} alt="icon-success" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button className="success-button">Dismiss Message</button>
    </div>
  );
}
export default SuccessCard;
